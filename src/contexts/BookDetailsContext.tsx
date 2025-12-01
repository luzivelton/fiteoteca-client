import type { IBookDetailsContext } from '@/interfaces/IBookDetails'
import React from 'react'

const INITIAL_STATE: IBookDetailsContext = {
  bookDetails: null,
  isLoading: false,
  error: null,
}

export const BookDetailsContext =
  React.createContext<IBookDetailsContext>(INITIAL_STATE)
