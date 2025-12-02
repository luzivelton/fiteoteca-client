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
      <Typography variant='body'>Por: {authorName || '-'}</Typography>
      <Typography variant='body'>
        Publicado em <Date date={publishedDate} />
      </Typography>
    </div>
  )
}

interface DateProps {
  date: string
}

function Date({ date }: DateProps) {
  return <time dateTime={date}>{formatDate(date, 'short')}</time>
}
