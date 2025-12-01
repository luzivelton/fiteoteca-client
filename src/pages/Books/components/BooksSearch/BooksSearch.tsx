import { Search } from '@/components/Search/Search'
import { useBooks } from '@/pages/Books/hooks/useBooks'
import { useFilters } from '@/pages/Books/hooks/useFilters'

export function BooksSearch() {
  const { booksRaw, updateBooks } = useBooks()
  const { searchedText, filterBySearchText, setSearchedText } = useFilters()

  function handleFilter(search: string) {
    if (booksRaw) {
      updateBooks(filterBySearchText(booksRaw, search))
      setSearchedText(search)
    }
  }

  return (
    <Search value={searchedText} placeholder='Buscar' onChange={handleFilter} />
  )
}
