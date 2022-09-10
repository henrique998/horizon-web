import { createContext, ReactNode, useCallback, useState } from 'react'
import { v4 as uuid } from 'uuid'
import filesize from 'filesize'
import { api } from '../services/api'

type UploadedImage = {
  image: File
  id: string
  name: string
  size: string
  previewImg: string
  progress: number
  uploaded: boolean
}

export type Image = {
  id: string
  url: string
}

type UploadContextData = {
  handleUpload: (images: File[]) => Promise<void>
  handleRemoveImage: (imageId: string) => void
  uploadedImages: UploadedImage[]
}

interface UploadContextProviderProps {
  children: ReactNode
}

export const UploadContext = createContext({} as UploadContextData)

export function UploadContextProvider({
  children,
}: UploadContextProviderProps) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])

  const handleUpload = useCallback(async (images: File[]) => {
    const formattedImages = images.map((image) => ({
      image,
      id: uuid(),
      name: image.name,
      size: filesize(image.size),
      previewImg: URL.createObjectURL(image),
      progress: 0,
      uploaded: false,
    }))

    setUploadedImages((state) => formattedImages.concat(state))

    formattedImages.forEach((uploadedImage) => {
      const imageData = new FormData()

      imageData.append('image', uploadedImage.image)

      api.post(
        '/photos',
        {
          photo: imageData.get('image'),
        },
        {
          onUploadProgress: (e) => {
            const progress = parseInt(Math.round((e.loaded * 100) / e.total))

            setUploadedImages((images) =>
              images.map((image) => {
                return uploadedImage.id === image.id
                  ? { ...uploadedImage, progress, uploaded: progress === 100 }
                  : image
              }),
            )
          },
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
      )
    })
  }, [])

  function handleRemoveImage(imageId: string) {
    const filteredImages = uploadedImages.filter(
      (image) => image.id !== imageId,
    )

    setUploadedImages(filteredImages)
  }

  return (
    <UploadContext.Provider
      value={{
        handleUpload,
        uploadedImages,
        handleRemoveImage,
      }}
    >
      {children}
    </UploadContext.Provider>
  )
}
