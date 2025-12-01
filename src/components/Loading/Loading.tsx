import clsx from 'clsx'
import styles from './Loading.module.scss'

type LoadingProps = React.HTMLAttributes<HTMLSpanElement> & {
  spinnerClassName?: string
  variant?: 'default' | 'layout'
}
export function Loading({
  className,
  style,
  color,
  spinnerClassName,
  variant = 'default',
  ...props
}: LoadingProps) {
  return (
    <span className={clsx(className, styles.container)}>
      <span
        className={clsx(
          styles.loading,
          spinnerClassName,
          SPINNER_STYLE_VARIANT[variant]
        )}
        {...props}
      />
    </span>
  )
}

const SPINNER_STYLE_VARIANT = {
  default: styles.spinnerDefault,
  layout: styles.spinnerLayout,
}
