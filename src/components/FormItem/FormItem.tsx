import {
  ErrorMessage,
  type FieldValuesFromFieldErrors,
} from '@hookform/error-message'
import type { FieldErrors, FieldName, FieldValues } from 'react-hook-form'
import styles from './FormItem.module.scss'
import clsx from 'clsx'

type FormItemProps<T extends FieldValues> =
  React.HTMLAttributes<HTMLDivElement> & {
    name: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>
    errors: FieldErrors<T>
  }

export function FormItem<T extends FieldValues>({
  errors,
  name,
  children,
  className,
  ...props
}: FormItemProps<T>) {
  return (
    <div className={clsx(styles.formItem, className)} {...props}>
      {children}
      <ErrorMessage errors={errors} name={name} />
    </div>
  )
}
