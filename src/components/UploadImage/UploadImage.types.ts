export type UploadImageProps = React.JSX.IntrinsicElements['div'] & {
  onChange?: (file: File | null) => void
  accept?: string
  multiple?: boolean
  onRemove?: () => Promise<void>
  onUpload: (file: File) => Promise<void>
  preview?: string | null
  isLoading?: boolean
}
