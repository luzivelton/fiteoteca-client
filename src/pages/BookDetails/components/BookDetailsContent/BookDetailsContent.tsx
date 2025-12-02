import { Typography } from '@/components/Typography/Typography'
import { useBookDetails } from '@/pages/BookDetails/hooks/useArticle'
import { AuthorAndDate } from '@/pages/BookDetails/components/AuthorAndDate/AuthorAndDate'
import styles from './BookDetailsContent.module.scss'
import React from 'react'
import { Loading } from '@/components/Loading/Loading'
import { BookDetailsImage } from '@/pages/BookDetails/components/BookDetailsImage/BookDetailsImage'

export function BookDetailsContent() {
  const { bookDetails, isLoading } = useBookDetails()

  if (!bookDetails) throw new Error('Livro não encontrado')

  if (isLoading) {
    return <Loading variant='layout' />
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <Typography variant='h1' numberOfLines={2}>
            {bookDetails.title}
          </Typography>
          <AuthorAndDate
            authorName={isLoading ? <Loading /> : bookDetails.author}
            publishedDate={bookDetails.publishedDate}
          />
          <Typography variant='body' numberOfLines={2}>
            {bookDetails.description?.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </div>
      </div>
      <BookDetailsImage src={bookDetails.imageUrl} alt={bookDetails.title} />
    </div>
  )
}
