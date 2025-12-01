export interface IBook {
  id: string
  title: string
  publishedDate: string
  description: string
  imageUrl?: string
}

export interface IBooksContext {
  books: IBook[]
  isLoading: boolean
  error: Error | null
  getBookById: (id: string) => IBook
  updateBooks: (newBooks: IBook[]) => void
  booksRaw: IBook[] | undefined
}
