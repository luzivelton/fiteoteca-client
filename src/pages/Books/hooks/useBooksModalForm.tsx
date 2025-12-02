import { Button } from '@/components/Button/Button'
import { Modal } from '@/components/Modal/Modal'
import { useToast } from '@/hooks/useToast'
import type { IBookDetailsPartial } from '@/interfaces/IBookDetails'
import { BooksForm } from '@/pages/Books/components/BooksForm/BooksForm'
import type { BooksFormMode } from '@/pages/Books/components/BooksForm/BooksForm.types'
import { useCallback, useState } from 'react'

interface IUseBooksForm {
  mode: BooksFormMode
  selectedBook?: IBookDetailsPartial | null
}

export function useBooksModalForm({ mode, selectedBook }: IUseBooksForm) {
  const modeText = MODE_TEXT[mode]
  const { showToast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClose = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const renderFooter = useCallback(
    ({ isDirty }: { isDirty: boolean }) => (
      <Modal.Footer>
        <Modal.Button variant='secondary' onClick={onClose} type='reset'>
          Cancelar
        </Modal.Button>
        <Modal.Button type='submit' disabled={!isDirty}>
          Salvar
        </Modal.Button>
      </Modal.Footer>
    ),
    [onClose]
  )

  const onOpenModal = () => {
    setIsModalOpen(true)
  }

  const modalButtonDisabled = mode === 'edit' && !selectedBook

  const formModalButton = (
    <Button variant='text' onClick={onOpenModal} disabled={modalButtonDisabled}>
      {modeText.openModalButton}
    </Button>
  )

  const onSuccess = useCallback(() => {
    onClose()
    showToast({ message: 'Livro salvo com sucesso!' })
  }, [onClose, showToast])

  const formModalContextHolder = (
    <Modal title={modeText.title} isOpen={isModalOpen} onClose={onClose}>
      <BooksForm
        mode={mode}
        selectedBook={selectedBook}
        renderFooter={renderFooter}
        onSuccess={onSuccess}
      />
    </Modal>
  )

  return {
    formModalButton,
    formModalContextHolder,
  }
}

const MODE_TEXT = {
  create: {
    title: 'Novo livro',
    openModalButton: 'Novo',
  },
  edit: {
    title: 'Editar livro',
    openModalButton: 'Editar',
  },
}
