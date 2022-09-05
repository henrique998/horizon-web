import { useContext } from 'react'
import { UploadContext } from '../contexts/UploadContext'

export function useUpload() {
  return useContext(UploadContext)
}
