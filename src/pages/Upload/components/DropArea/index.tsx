import Dropzone from 'react-dropzone'

import imageIlustration from '../../../../assets/imageIlustration.svg'
import dangerImageIlustration from '../../../../assets/dangerImageIlustration.svg'

import { DropAreaContainer, DropAreaContent } from './styles'
import { useUpload } from '../../../../hooks/useUpload'

export function DropArea() {
  const { handleUpload } = useUpload()

  return (
    <Dropzone
      accept={{
        'image/*': ['.png', '.jpeg', '.jpg'],
      }}
      onDropAccepted={handleUpload}
    >
      {({ getRootProps, getInputProps, isDragReject, isDragActive }) => (
        <DropAreaContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input type="file" {...getInputProps()} />

          <DropAreaContent isDragReject={isDragReject}>
            {!isDragActive && !isDragReject && (
              <>
                <img src={imageIlustration} alt="image ilustration" />

                <p>
                  Drop your images here, or <strong>browse</strong>
                </p>

                <span>Support: png, jpeg and jpg</span>
              </>
            )}

            {isDragActive && !isDragReject && (
              <>
                <img src={imageIlustration} alt="image ilustration" />

                <p>Drag your images here</p>

                <span>Support: png, jpeg and jpg</span>
              </>
            )}

            {isDragReject && (
              <>
                <img
                  src={dangerImageIlustration}
                  alt="danger image ilustration"
                />

                <p>File not supported</p>

                <span>only files: png, jpeg and jpg are supported</span>
              </>
            )}
          </DropAreaContent>
        </DropAreaContainer>
      )}
    </Dropzone>
  )
}
