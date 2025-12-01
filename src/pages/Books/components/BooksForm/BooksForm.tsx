import { Input } from '@/components/Input/Input'
import { InputArea } from '@/components/InputArea/InputArea'
import { InputDate } from '@/components/InputDate/InputDate'
import {
  useBookDetailsData,
  useCreateBook,
  useUpdateBook,
} from '@/hooks/useDataHooks'
import type { IBook } from '@/interfaces/IBook'
import type { IBookDetails } from '@/interfaces/IBookDetails'
import { useEffect, useMemo, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/Form/Form'
import { FormItem } from '@/components/FormItem/FormItem'
import type { BooksFormMode } from '@/pages/Books/components/BooksForm/BooksForm.types'

interface BooksFormProps {
  selectedBook: IBook | undefined | null
  mode: BooksFormMode
  footer: ReactNode
}
export function BooksForm({ selectedBook, footer, mode }: BooksFormProps) {
  const { data, isLoading: loadingCurrentData } = useBookDetailsData(
    selectedBook?.id
  )
  const createBook = useCreateBook()
  const updateBook = useUpdateBook(selectedBook?.id)

  const completeData = useMemo(() => {
    return {
      ...data,
      ...selectedBook,
    }
  }, [data, selectedBook])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookDetails>({
    defaultValues: completeData,
  })

  useEffect(() => {
    if (data) {
      reset(data)
    }
  }, [data, reset])

  function onSubmit(data: IBookDetails) {
    if (mode === 'create') {
      createBook.mutate(data)
      return
    }

    updateBook.mutate(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem name='title' errors={errors}>
        <Input placeholder='Título' {...register('title')} autoFocus={true} />
      </FormItem>
      <FormItem name='author' errors={errors}>
        <Input
          placeholder='Autor'
          loading={loadingCurrentData}
          {...register('author')}
        />
      </FormItem>
      <FormItem name='publishedDate' errors={errors}>
        <InputDate
          placeholder='Data de Publicação'
          {...register('publishedDate')}
        />
      </FormItem>
      <FormItem name='imageUrl' errors={errors}>
        <Input placeholder='URL da Imagem' {...register('imageUrl')} />
      </FormItem>
      <FormItem name='description' errors={errors}>
        <InputArea
          rows={10}
          placeholder='Descrição'
          {...register('description')}
        />
      </FormItem>
      {footer}
    </Form>
  )
}
