import { UploadImage } from '@/components/UploadImage/UploadImage'
import type { UploadImageProps } from '@/components/UploadImage/UploadImage.types'
import { getSignedUploadUrl, uploadToS3 } from '@/api/uploadImage'
import { useState } from 'react'

type UploadImageExternalProps = Omit<
  UploadImageProps,
  'onUpload' | 'onRemove' | 'onChange'
> & {
  onChange?: (url: string) => void
  value?: string
}

export function UploadImageExternal({
  onChange,
  value,
  ...props
}: UploadImageExternalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const handleUpload: UploadImageProps['onUpload'] = async (file: File) => {
    setIsLoading(true)
    try {
      const { url } = await getSignedUploadUrl(file)
      const finalUrl = await uploadToS3(url, file)

      if (finalUrl) {
        onChange?.(finalUrl)
      }
    } catch (err) {
      console.error('Image upload failed', err)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleRemove() {
    onChange?.('')
  }

  return (
    <UploadImage
      {...props}
      preview={value}
      onRemove={handleRemove}
      onUpload={handleUpload}
      isLoading={isLoading}
    />
  )
}
