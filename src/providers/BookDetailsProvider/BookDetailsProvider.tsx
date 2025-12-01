import { BookDetailsContext } from '@/contexts/BookDetailsContext'
import { useBookDetailsData } from '@/hooks/useDataHooks'
import type {
  IBookDetailsContext,
  IBookDetailsPartial,
} from '@/interfaces/IBookDetails'
import { useBooks } from '@/pages/Books/hooks/useBooks'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

type BookDetailsProviderProps = {
  children: React.ReactNode
}

export function BookDetailsProvider({ children }: BookDetailsProviderProps) {
  const id = useParams<{ id: string }>().id
  const {
    data: bookRaw,
    error,
    isLoading: isLoadingRaw,
  } = useBookDetailsData(id)
  const { getBookById } = useBooks()

  const listData = useMemo(() => {
    return getBookById(id)
  }, [getBookById, id])

  const isLoading = isLoadingRaw && !listData

  const bookDetails = useMemo<IBookDetailsPartial>(
    () => ({
      ...listData,
      ...bookRaw,
      id,
    }),
    [bookRaw, listData, id]
  )

  const value = useMemo<IBookDetailsContext>(
    () => ({
      bookDetails,
      error,
      isLoading,
    }),
    [bookDetails, error, isLoading]
  )

  return (
    <BookDetailsContext.Provider value={value}>
      {children}
    </BookDetailsContext.Provider>
  )
}
