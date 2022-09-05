import { useState } from 'react'
import { EmptyBox } from './components/EmptyBox'
import { PhotosBox } from './components/PhotosBox'

export function Home() {
  const [photos, setPhotos] = useState([])

  return <main>{photos.length >= 1 ? <PhotosBox /> : <EmptyBox />}</main>
}
