import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { IBook, IBooksContext } from '@/interfaces/IBook'
import { BooksContext } from '@/contexts/BooksContext'
import { useBooksData } from '@/hooks/useDataHooks'

type BooksProviderProps = {
  children: ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
  const { data: booksRaw, isLoading, error } = useBooksData()
  const [books, setBooks] = useState<IBook[]>(booksRaw ?? [])

  const booksIdMap = useMemo(() => {
    const map = new Map<string, IBook>()
    books?.forEach((book) => map.set(book.id, book))
    return map
  }, [books])

  const getBookById = useCallback(
    (id: string): IBook => {
      const targetMap = booksIdMap
      return targetMap.get(id) as IBook
    },
    [booksIdMap]
  )

  const updateBooks = useCallback((books: IBook[]) => {
    setBooks(books)
  }, [])

  useEffect(() => {
    if (booksRaw) {
      updateBooks(booksRaw)
    }
  }, [booksRaw, updateBooks])

  const value = useMemo<IBooksContext>(
    (): IBooksContext => ({
      books,
      isLoading,
      error,
      getBookById,
      updateBooks,
      booksRaw,
    }),
    [books, isLoading, getBookById, error, updateBooks, booksRaw]
  )

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}
