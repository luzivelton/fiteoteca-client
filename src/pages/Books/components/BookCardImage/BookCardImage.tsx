import { Image } from '@/components/Image/Image'
import type { ImageProps } from '@/components/Image/Image.types'
import clsx from 'clsx'
import styles from './BookCardImage.module.scss'

type BookCardImageProps = Omit<ImageProps, 'className'> & {
  classNames?: {
    container?: string
    image?: string
  }
}

export function BookCardImage({ classNames, ...props }: BookCardImageProps) {
  return (
    <div className={clsx(styles.container, classNames?.container)}>
      <Image
        className={clsx(styles.image, classNames?.image)}
        alt='Book details image'
        {...props}
      />
    </div>
  )
}
