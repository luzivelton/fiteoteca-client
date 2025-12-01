import styles from './BookDetailsActions.module.scss'
import { useBooksModalForm } from '@/pages/Books/hooks/useBooksModalForm'
import { useBookDetails } from '@/pages/BookDetails/hooks/useArticle'
import { useBooksModalDelete } from '@/pages/Books/hooks/useBooksModalDelete'

export function BookDetailsActions() {
  const { bookDetails } = useBookDetails()
  const { formModalButton, formModalContextHolder } = useBooksModalForm({
    mode: 'edit',
    selectedBook: bookDetails,
  })

  const { deleteModalButton, deleteModalContextHolder } = useBooksModalDelete({
    id: bookDetails?.id,
  })

  return (
    <>
      {formModalContextHolder}
      {deleteModalContextHolder}
      <div className={styles.container}>
        {formModalButton}
        {deleteModalButton}
      </div>
    </>
  )
}
