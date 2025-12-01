export type ButtonVariant = 'primary' | 'secondary' | 'text'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  small?: boolean
  asChild?: boolean
  color?: 'danger' | 'default'
  isLoading?: boolean
}
