import { Typography } from '@/components/Typography/Typography'
import { useBookDetails } from '@/pages/BookDetails/hooks/useArticle'
import { AuthorAndDate } from '@/pages/Blog/components/AuthorAndDate/AuthorAndDate'
import { BookDetailsImage } from '@/pages/Blog/components/BookDetailsImage/BookDetailsImage'
import { ArticleLoader } from '@/pages/BookDetails/components/BookDetailsLoader/BookDetailsLoader'
import styles from './BookDetailsContent.module.scss'
import React from 'react'
import { Loading } from '@/components/Loading/Loading'

export function BookDetailsContent() {
  const { bookDetails, isLoading } = useBookDetails()

  if (!bookDetails) throw new Error('Livro não encontrado')

  return (
    <ArticleLoader isLoading={isLoading}>
      <div className={styles.container}>
        <Typography variant='h3' numberOfLines={2}>
          {bookDetails.title}
        </Typography>
        <AuthorAndDate
          authorName={isLoading ? <Loading /> : bookDetails.author}
          publishedDate={bookDetails.publishedDate}
        />
        <BookDetailsImage src={bookDetails.imageUrl} alt={bookDetails.title} />
        <Typography variant='body' numberOfLines={2}>
          {bookDetails.description?.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </div>
    </ArticleLoader>
  )
}
