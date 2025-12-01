import { Input } from '@/components/Input/Input'
import { MdClose, MdSearch } from 'react-icons/md'
import styles from './Search.module.scss'
import clsx from 'clsx'
import React, { useCallback } from 'react'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import type { SearchProps } from '@/components/Search/Search.types'

export function Search({
  className,
  classNames,
  onChange,
  value,
  ...rest
}: SearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const isEmpty = !value

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  function handleClear(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()

    if (inputRef.current) {
      inputRef.current.value = ''
      focusInput()
    }
    if (onChange) onChange('')
  }

  function handleEscape(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      if (inputRef && inputRef.current) inputRef.current.blur()
      if (onChange) onChange('')
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.content, className, {
          [classNames?.contentFocused || '']: !isEmpty,
        })}
      >
        <div className={styles.inputContainer}>
          {isEmpty ? (
            <ButtonIcon
              key='search'
              label='Search'
              variant='transparent'
              className={styles.mainButton}
            >
              <MdSearch />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              key='clear'
              label='Clear'
              className={styles.mainButton}
              onClick={handleClear}
              variant='transparent'
              secondary={true}
            >
              <MdClose />
            </ButtonIcon>
          )}
          <Input
            ref={inputRef}
            className={clsx(styles.input)}
            onChange={handleChange}
            onKeyDown={handleEscape}
            {...rest}
          />
        </div>
      </div>
    </div>
  )
}
