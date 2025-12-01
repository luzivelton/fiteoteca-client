import { Button } from '@/components/Button/Button'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styles from './BookDetailsHeader.module.scss'
import { BookDetailsActions } from '@/pages/BookDetails/components/BookDetailsActions/BookDetailsActions'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'

export function BookDetailsHeader() {
  return (
    <AppLayout.Header className={styles.container}>
      <Button asChild={true} className={styles.backButton} variant='text'>
        <Link to='/'>
          <MdArrowBackIos className={styles.backIcon} size='1.5rem' />
          Voltar
        </Link>
      </Button>
      <BookDetailsActions />
    </AppLayout.Header>
  )
}
