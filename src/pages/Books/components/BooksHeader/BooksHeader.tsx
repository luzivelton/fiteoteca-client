import { Typography } from '@/components/Typography/Typography'
import { BooksSearch } from '@/pages/Books/components/BooksSearch/BooksSearch'
import styles from './BooksHeader.module.scss'
import { useBooksModalForm } from '@/pages/Books/hooks/useBooksModalForm'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'

export function BooksHeader() {
  const { formModalButton, formModalContextHolder } = useBooksModalForm({
    mode: 'create',
  })

  return (
    <AppLayout.Header className={styles.container}>
      {formModalContextHolder}
      <div className={styles.topbar}>
        <Typography variant='h1'>Livros</Typography>
        {formModalButton}
      </div>
      <BooksSearch />
    </AppLayout.Header>
  )
}
