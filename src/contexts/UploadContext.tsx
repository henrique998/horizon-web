import { createContext, ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'
import filesize from 'filesize'
import { api } from '../services/axios'

type Image = {
  image: File
  id: string
  name: string
  size: string
  previewImg: string
  progress: number
  uploaded: boolean
}

type UploadContextData = {
  handleUpload: (images: File[]) => Promise<void>
  uploadedImages: Image[]
}

interface UploadContextProviderProps {
  children: ReactNode
}

export const UploadContext = createContext({} as UploadContextData)

export function UploadContextProvider({
  children,
}: UploadContextProviderProps) {
  const [uploadedImages, setUploadedImages] = useState<Image[]>([])

  async function handleUpload(images: File[]) {
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

    formattedImages.forEach(async (uploadedImage) => {
      const imageData = new FormData()

      imageData.append('image', uploadedImage.image)

      await api.post('/photos', {
        photo: imageData.get('image'),
      })
    })
  }

  return (
    <UploadContext.Provider value={{ handleUpload, uploadedImages }}>
      {children}
    </UploadContext.Provider>
  )
}
