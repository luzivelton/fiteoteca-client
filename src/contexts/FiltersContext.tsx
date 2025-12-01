import React from 'react'
import type { IFiltersContext } from '@/interfaces/IFilters'

const INITIAL_STATE: IFiltersContext = {
  searchedText: '',
  setSearchedText: () => {},
  filterBySearchText: () => [],
}

export const FiltersContext =
  React.createContext<IFiltersContext>(INITIAL_STATE)
