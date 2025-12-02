import React, { useRef } from 'react'
import styles from './UploadImage.module.scss'
import { Typography } from '@/components/Typography/Typography'
import clsx from 'clsx'
import { Button } from '@/components/Button/Button'
import type { UploadImageProps } from '@/components/UploadImage/UploadImage.types'
import { Loading } from '@/components/Loading/Loading'

export function UploadImage({
  onUpload,
  accept = 'image/*',
  multiple = false,
  className,
  onRemove,
  preview: initialPreview,
  isLoading,
}: UploadImageProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = React.useState<string | null>(
    initialPreview || null
  )

  function handleClick() {
    inputRef.current?.click()
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null
    if (file) {
      const url = URL.createObjectURL(file)
      if (file) onUpload?.(file)
      setPreview(url)
    } else {
      setPreview(null)
    }
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0] || null
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
    } else {
      setPreview(null)
    }
    onUpload?.(file)
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  async function handleRemove(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    try {
      if (onRemove) {
        await onRemove()
      }
      setPreview(null)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div
      className={clsx(styles.container, className)}
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      tabIndex={0}
      role='button'
      aria-label='Upload image'
    >
      {isLoading && <Loading className={styles.loading} />}
      {preview ? (
        <>
          <img src={preview} alt='Preview' className={styles.preview} />
          <Button small={true} variant='text' onClick={handleRemove}>
            Remover imagem
          </Button>
        </>
      ) : (
        <>
          <img
            className={styles.icon}
            src='/images/pictureIcon.svg'
            alt='Upload'
          />
          <Typography variant='body'>Escolher imagem</Typography>
        </>
      )}
      <input
        type='file'
        ref={inputRef}
        style={{ display: 'none' }}
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
      />
    </div>
  )
}
