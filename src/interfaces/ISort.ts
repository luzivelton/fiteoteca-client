import type { _sortType } from '@/interfaces/IFilters'

export interface ISort {
  label: string
  value: _sortType
}

export interface ISortContext {
  selectedSort: _sortType
  sortOptions: ISort[]
  updateSort: (changedItem: _sortType) => void
  getSortById: (id: string) => ISort | undefined
}
