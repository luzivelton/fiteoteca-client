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
import { Controller, useForm } from 'react-hook-form'
import { Form } from '@/components/Form/Form'
import { FormItem } from '@/components/FormItem/FormItem'
import type { BooksFormMode } from '@/pages/Books/components/BooksForm/BooksForm.types'
import styles from './BooksForm.module.scss'
import { UploadImageExternal } from '@/components/UploadImage/UploadImageExternal'
import { useQueryClient } from '@tanstack/react-query'
interface BooksFormProps {
  selectedBook: IBook | undefined | null
  mode: BooksFormMode
  renderFooter: (args: { isDirty: boolean }) => ReactNode
  onSuccess: () => void
}
export function BooksForm({
  selectedBook,
  renderFooter,
  mode,
  onSuccess,
}: BooksFormProps) {
  const { data, isLoading: loadingCurrentData } = useBookDetailsData(
    selectedBook?.id
  )
  const queryClient = useQueryClient()
  const createBook = useCreateBook(queryClient)
  const updateBook = useUpdateBook(selectedBook?.id, queryClient)

  const completeData = useMemo(() => {
    return {
      author: data?.author ?? '',
      title: data?.title ?? selectedBook?.title ?? '',
      publishedDate: data?.publishedDate ?? selectedBook?.publishedDate ?? '',
      description: data?.description ?? selectedBook?.description ?? '',
      imageUrl: data?.imageUrl ?? selectedBook?.imageUrl ?? '',
    }
  }, [data, selectedBook])

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
  } = useForm<IBookDetails>({
    defaultValues: completeData,
  })

  const footer = useMemo(
    () => renderFooter({ isDirty }),
    [renderFooter, isDirty]
  )

  useEffect(() => {
    if (data) {
      reset(data)
    }
  }, [data, reset])

  useEffect(() => {
    if (createBook.isSuccess || updateBook.isSuccess) {
      onSuccess()
    }
  }, [updateBook.isSuccess, createBook.isSuccess, onSuccess])

  function onSubmit(data: IBookDetails) {
    if (mode === 'create') {
      createBook.mutate(data)
      return
    }

    updateBook.mutate(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.upperRow}>
        <div className={styles.basicInfo}>
          <FormItem name='title' errors={errors}>
            <Input
              placeholder='Título'
              {...register('title')}
              autoFocus={mode === 'create'}
            />
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
        </div>

        <FormItem className={styles.imageField} name='imageUrl' errors={errors}>
          <Controller
            name='imageUrl'
            control={control}
            render={({ field }) => <UploadImageExternal {...field} />}
          />
        </FormItem>
      </div>
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
