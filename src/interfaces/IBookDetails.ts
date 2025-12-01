import type { IBook } from '@/interfaces/IBook'
import type { PickPartial } from '@/interfaces/utils/PickPartial'

export interface IBookDetails extends IBook {
  author: string
}

export type IBookDetailsPartial = PickPartial<IBookDetails, 'author'>

export interface IBookDetailsContext {
  bookDetails: IBookDetailsPartial | null
  isLoading: boolean
  error: Error | null
}
