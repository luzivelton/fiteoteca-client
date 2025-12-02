import { Button } from '@/components/Button/Button'
import { Modal } from '@/components/Modal/Modal'
import { Typography } from '@/components/Typography/Typography'
import { useDeleteBook } from '@/hooks/useDataHooks'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

interface BookDeleteButtonProps {
  id: string | undefined
}

export function useBooksModalDelete({ id }: BookDeleteButtonProps) {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useDeleteBook(id, queryClient)
  const [openModal, setOpenModal] = useState(false)

  function handleDelete() {
    mutate()
  }

  function onCloseModal() {
    setOpenModal(false)
  }

  function onOpenModal() {
    setOpenModal(true)
  }

  const deleteModalButton = (
    <Button variant='text' color='danger' onClick={onOpenModal}>
      Excluir
    </Button>
  )

  const deleteModalContextHolder = (
    <Modal
      variant='message'
      isOpen={openModal}
      onClose={onCloseModal}
      title='Tem certeza?'
    >
      <Typography variant='body'>
        Ao excluir este livro não será possível recuperá-lo. Realmente deseja
        excluí-lo?
      </Typography>
      <Modal.Footer>
        <Modal.Button variant='secondary' onClick={onCloseModal}>
          Cancelar
        </Modal.Button>
        <Modal.Button
          variant='primary'
          color='danger'
          onClick={handleDelete}
          isLoading={isPending}
        >
          Excluir
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  )

  return {
    deleteModalContextHolder,
    deleteModalButton,
  }
}
