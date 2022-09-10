import { useQuery } from 'react-query'
import { api } from '../../services/api'
import { EmptyBox } from './components/EmptyBox'
import { PhotosBox } from './components/PhotosBox'

export function Home() {
  const { data: images } = useQuery('images', async () => {
    const response = await api.get('/photos')

    return response.data
  })

  return (
    <main>
      {images?.length >= 1 ? <PhotosBox images={images} /> : <EmptyBox />}
    </main>
  )
}
