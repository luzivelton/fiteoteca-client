import React from 'react'
import type { IBook, IBooksContext } from '@/interfaces/IBook'

const INITIAL_STATE: IBooksContext = {
  books: [],
  getBookById: () => undefined as unknown as IBook,
  booksRaw: [],
  error: null,
  isLoading: false,
  updateBooks: () => Promise.resolve(),
}

export const BooksContext = React.createContext<IBooksContext>(INITIAL_STATE)
