import { Button } from '@/components/Button/Button'
import { Modal } from '@/components/Modal/Modal'
import type { IBookDetailsPartial } from '@/interfaces/IBookDetails'
import { BooksForm } from '@/pages/Books/components/BooksForm/BooksForm'
import type { BooksFormMode } from '@/pages/Books/components/BooksForm/BooksForm.types'
import { useState } from 'react'

interface IUseBooksForm {
  mode: BooksFormMode
  selectedBook?: IBookDetailsPartial | null
}

export function useBooksModalForm({ mode, selectedBook }: IUseBooksForm) {
  const modeText = MODE_TEXT[mode]

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onOpenModal = () => {
    setIsModalOpen(true)
  }

  const onClose = () => {
    setIsModalOpen(false)
  }

  const modalButtonDisabled = mode === 'edit' && !selectedBook

  const formModalButton = (
    <Button variant='text' onClick={onOpenModal} disabled={modalButtonDisabled}>
      {modeText.openModalButton}
    </Button>
  )

  const formModalContextHolder = (
    <Modal title={modeText.title} isOpen={isModalOpen} onClose={onClose}>
      <BooksForm
        mode={mode}
        selectedBook={selectedBook}
        footer={
          <Modal.Footer>
            <Modal.Button variant='secondary' onClick={onClose} type='reset'>
              Cancelar
            </Modal.Button>
            <Modal.Button type='submit'>Salvar</Modal.Button>
          </Modal.Footer>
        }
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
