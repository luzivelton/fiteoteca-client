import { api } from '@/api/api'
import axios from 'axios'

export async function getSignedUploadUrl(file: File) {
  const res = await api.post('/upload/sign', {
    filename: file.name,
    filetype: file.type,
  })

  return res.data as { url: string }
}

export async function uploadToS3(url: string, file: File) {
  const res = await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  })

  if (res.status < 200 || res.status >= 300) {
    throw new Error('Failed to upload to S3')
  }

  const finalUrl = url.split('?')?.[0]

  return finalUrl
}
