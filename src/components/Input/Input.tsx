import type { InputProps } from '@/components/Input/Input.types'
import styles from './Input.module.scss'
import clsx from 'clsx'
import { Loading } from '@/components/Loading/Loading'

export function Input({ className, ref, loading, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <input
        readOnly={loading}
        className={clsx(styles.input, className)}
        ref={ref}
        {...props}
      />
      {loading && <Loading className={styles.loading} />}
    </div>
  )
}
