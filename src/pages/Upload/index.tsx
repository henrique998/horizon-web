import { DropArea } from './components/DropArea'
import { UploadedImagesList } from './components/UploadedImagesList'
import { UploadContainer } from './styles'

export function Upload() {
  return (
    <main>
      <UploadContainer>
        <DropArea />
        <UploadedImagesList />
      </UploadContainer>
    </main>
  )
}
