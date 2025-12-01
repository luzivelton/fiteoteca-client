import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { FiltersContext } from '@/contexts/FiltersContext'
import type { IFiltersContext } from '@/interfaces/IFilters'
import type { IBook } from '@/interfaces/IBook'
import { handleFilter } from '@/utils/handleFilter/handleFilter'

type FiltersProviderProps = {
  children: ReactNode
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const { searchedText, setSearchedText, filterBySearchText } =
    useSearchedTextFilter()

  const value = useMemo<IFiltersContext>(
    () => ({
      searchedText,
      setSearchedText,
      filterBySearchText,
    }),
    [searchedText, setSearchedText, filterBySearchText]
  )

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

function useSearchedTextFilter() {
  const [searchedText, setSearchedText] = useState<string>('')

  const filterBySearchText = useCallback(
    (posts: IBook[], searchedText: string): IBook[] => {
      if (!searchedText.trim()) return posts

      return posts.filter((post) =>
        handleFilter(searchedText, [post.title, post.description])
      )
    },
    []
  )

  return {
    searchedText,
    setSearchedText,
    filterBySearchText,
  }
}
