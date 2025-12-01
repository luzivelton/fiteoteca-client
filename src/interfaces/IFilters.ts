import type { IBook } from '@/interfaces/IBook'

export interface IFiltersContext {
  searchedText: string
  setSearchedText: (text: string) => void
  filterBySearchText: (posts: IBook[], searchedText: string) => IBook[]
}

export type _sortType = 'date_asc' | 'date_desc' | 'title_asc' | 'title_desc'
