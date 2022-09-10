import { Trash } from 'phosphor-react'
import { Image } from '../../../../contexts/UploadContext'
import { api } from '../../../../services/api'

import { PhotosBoxContainer, PhotosContainer, PhotoBox } from './styles'

interface PhotosBoxProps {
  images: Image[]
}

export function PhotosBox({ images }: PhotosBoxProps) {
  async function handleDeleteImage(imageId: string) {
    await api.delete(`/photos/delete/${imageId}`)
  }

  return (
    <section>
      <PhotosBoxContainer>
        <header>
          <h1>Last Photos</h1>
          <p>check out your photos below</p>
        </header>

        <PhotosContainer>
          {images
            .sort(() => -1)
            .map((image) => (
              <PhotoBox key={image.id}>
                <img src={image.url} alt="woman" />

                <button
                  type="button"
                  onClick={() => handleDeleteImage(image.id)}
                >
                  <Trash size={18} />
                  Delete
                </button>
              </PhotoBox>
            ))}
        </PhotosContainer>
      </PhotosBoxContainer>
    </section>
  )
}
