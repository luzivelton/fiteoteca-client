export type _variant =
  | 'body'
  | 'bodySmall'
  | 'bodyLarge'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'caption'

export type TypographyElementProps =
  React.HTMLAttributes<HTMLParagraphElement> & {
    variant: _variant
    asChild?: boolean
  }

export type TypographyElement<T extends TypographyElementProps> =
  React.ElementType<T>

export type TypographyProps = TypographyElementProps & {
  strong?: boolean
  secondary?: boolean
  numberOfLines?: number
  asChild?: boolean
}
