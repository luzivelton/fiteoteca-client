import { BookCard } from '@/pages/Books/components/BookCard/BookCard'
import styles from './BooksList.module.scss'
import type { IBook } from '@/interfaces/IBook'
import { Typography } from '@/components/Typography/Typography'
import { Loading } from '@/components/Loading/Loading'

type BooksListProps = React.HTMLAttributes<HTMLElement> & {
  books: IBook[]
  isLoading: boolean
  errorMessage: string | undefined
}

export function BooksList({ books, isLoading, errorMessage }: BooksListProps) {
  if (isLoading) {
    return <Loading variant='layout' />
  }

  if (books.length === 0 || errorMessage) {
    return (
      <Typography className={styles.empty} variant='bodyLarge'>
        {errorMessage || 'Nenhum livro encontrado.'}
      </Typography>
    )
  }
  return (
    <section className={styles.list}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          imageUrl={book.imageUrl}
          description={book.description}
          publishedDate={book.publishedDate}
        />
      ))}
    </section>
  )
}
