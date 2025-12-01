import clsx from 'clsx'
import styles from './Button.module.scss'
import React from 'react'
import { AsChild } from '@/components/AsChild/AsChild'
import type {
  ButtonProps,
  ButtonVariant,
} from '@/components/Button/Button.types'
import { Loading } from '@/components/Loading/Loading'

export function Button({
  variant = 'primary',
  color = 'default',
  className,
  children,
  small,
  asChild,
  isLoading,
  ...props
}: ButtonProps) {
  const variantClass = VARIANT_STYLES[variant]
  const classNameFinal = clsx(
    styles.button,
    variantClass,
    { [styles.small]: small },
    styles[color],
    className
  )

  if (asChild && React.isValidElement(children)) {
    return (
      <AsChild
        props={{
          className: classNameFinal,
          ...props,
        }}
      >
        {children}
      </AsChild>
    )
  }

  return (
    <button className={classNameFinal} {...props}>
      {isLoading && (
        <Loading
          className={styles.loading}
          spinnerClassName={SPINNER_STYLE_VARIANT[variant]}
        />
      )}
      {children}
    </button>
  )
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  text: styles.text,
}

const SPINNER_STYLE_VARIANT: Record<ButtonVariant, string> = {
  primary: styles.primaryText,
  secondary: styles.secondaryText,
  text: styles.textContent,
}
