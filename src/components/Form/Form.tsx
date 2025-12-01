import clsx from 'clsx'
import styles from './Form.module.scss'
import { useState } from 'react'
import { Prompt } from 'react-router-dom'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export function Form({ className, onSubmit, ...props }: FormProps) {
  const [hasChanges, setHasChanges] = useState(false)

  function handleChange() {
    setHasChanges(true)
    console.log('went off')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setHasChanges(false)
    if (onSubmit) onSubmit(e)
  }

  return (
    <>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={clsx(styles.form, className)}
        {...props}
      />
      <Prompt when={true} message='Você tem mudanças não salvas' />
    </>
  )
}
