import type { ImageProps } from '@/components/Image/Image.types'
import { useCallback, useEffect, useState } from 'react'

export function Image({
  fallback = '/images/imageFallback.svg',
  src,
  className,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src ?? fallback)

  const handleError = useCallback(() => {
    setImgSrc((prev) => (prev !== fallback ? fallback : prev))
  }, [fallback])

  useEffect(() => {
    if (src) {
      setImgSrc(src)

      return
    }

    handleError()
  }, [src, handleError])

  return (
    <img
      className={className}
      loading='lazy'
      src={imgSrc}
      onError={handleError}
      {...props}
    />
  )
}
