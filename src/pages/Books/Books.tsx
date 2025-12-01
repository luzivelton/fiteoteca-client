import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { BooksList } from '@/pages/Books/components/BooksList/BooksList'
import { BooksHeader } from '@/pages/Books/components/BooksHeader/BooksHeader'
import { useBooks } from '@/pages/Books/hooks/useBooks'
import styles from './Books.module.scss'

export function Books() {
  const { books, isLoading, error } = useBooks()

  return (
    <AppLayout>
      <AppLayout.Content className={styles.books}>
        <BooksHeader />
        <BooksList
          books={books}
          isLoading={isLoading}
          errorMessage={error?.message}
        />
      </AppLayout.Content>
    </AppLayout>
  )
}
