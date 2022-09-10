import { X } from 'phosphor-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useColors } from '../../../../hooks/useColors'
import { useUpload } from '../../../../hooks/useUpload'

import {
  UploadedImagesListContainer,
  ImageItem,
  ImageDetails,
  ImageActions,
  DeleteButton,
} from './styles'

export function UploadedImagesList() {
  const { 'base-brand-900': strokeColor } = useColors()
  const { uploadedImages, handleRemoveImage } = useUpload()

  return (
    <UploadedImagesListContainer>
      <ul>
        {uploadedImages?.map((image) => (
          <ImageItem key={image.id}>
            <ImageDetails>
              <img src={image.previewImg} alt="image" />

              <div>
                <strong>{image.name}</strong>
                <span>{image.size}</span>
              </div>
            </ImageDetails>

            <ImageActions>
              {image.uploaded && (
                <DeleteButton onClick={() => handleRemoveImage(image.id)}>
                  <X size={16} weight={'bold'} />
                </DeleteButton>
              )}

              <CircularProgressbar
                styles={{
                  root: {
                    width: 32,
                  },
                  path: {
                    stroke: strokeColor,
                  },
                }}
                strokeWidth={10}
                value={image.progress}
                text={`${image.progress}%`}
              />
            </ImageActions>
          </ImageItem>
        ))}
      </ul>
    </UploadedImagesListContainer>
  )
}
