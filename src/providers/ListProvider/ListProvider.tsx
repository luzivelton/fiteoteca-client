import { FiltersProvider } from '@/providers/FiltersProvider/FiltersProvider'
import { SortProvider } from '@/providers/SortProvider/SortProvider'

type ListProviderProps = {
  children: React.ReactNode
}

export function ListProvider({ children }: ListProviderProps) {
  return (
    <SortProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </SortProvider>
  )
}
