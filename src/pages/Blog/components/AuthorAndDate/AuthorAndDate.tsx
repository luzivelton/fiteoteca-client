import { Typography } from '@/components/Typography/Typography'
import { formatDate } from '@/utils/formatDate/formatDate'
import styles from './AuthorAndDate.module.scss'
import type { ReactNode } from 'react'

type AuthorAndDateProps = {
  authorName: ReactNode
  publishedDate: string
}

export function AuthorAndDate({
  authorName,
  publishedDate,
}: AuthorAndDateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <Typography variant='caption'>Por: {authorName}</Typography>
        <Typography variant='caption' secondary={true}>
          <Date date={publishedDate} />
        </Typography>
      </div>
    </div>
  )
}

interface DateProps {
  date: string
}

function Date({ date }: DateProps) {
  return <time dateTime={date}>{formatDate(date, 'short')}</time>
}
