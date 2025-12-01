import { useContext } from 'react'
import { BookDetailsContext } from '@/contexts/BookDetailsContext'

export const useBookDetails = () => {
  const context = useContext(BookDetailsContext)
  if (!context) {
    throw new Error('useBookDetails must be used within a BookDetailsProvider')
  }
  return context
}
