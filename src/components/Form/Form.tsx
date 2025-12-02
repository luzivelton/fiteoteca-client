import clsx from 'clsx'
import styles from './Form.module.scss'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export function Form({ className, onSubmit, ...props }: FormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (onSubmit) onSubmit(e)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(styles.form, className)}
      {...props}
    />
  )
}
