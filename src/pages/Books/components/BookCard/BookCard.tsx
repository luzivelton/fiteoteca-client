import { Typography } from '@/components/Typography/Typography'
import styles from './BookCard.module.scss'
import type { IBook } from '@/interfaces/IBook'
import clsx from 'clsx'
import { memo } from 'react'
import { BookDetailsImage } from '@/pages/Blog/components/BookDetailsImage/BookDetailsImage'
import { Link } from 'react-router-dom'

type FeedCardProps = React.JSX.IntrinsicElements['section'] & IBook

const BookCardInner = ({
  id,
  description,
  publishedDate,
  title,
  imageUrl,
  className,
  ...props
}: FeedCardProps) => {
  return (
    <article
      className={clsx(styles.container, className)}
      {...props}
      data-testid='book-card'
    >
      <div className={styles.imageContainer}>
        <BookDetailsImage
          classNames={{ image: styles.image }}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <Typography variant='h3' numberOfLines={2}>
          <Link className={styles.title} to={`/${id}`}>
            {title}
          </Link>
        </Typography>
        <Typography
          className={styles.description}
          variant='body'
          numberOfLines={9}
        >
          <p>{description}</p>
        </Typography>
      </div>
    </article>
  )
}

export const BookCard = memo(BookCardInner)
