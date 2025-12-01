import { QueryProvider } from './QueryProvider/QueryProvider'
import { IconProvider } from './IconProvider/IconProvider'
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary'
import { ListProvider } from '@/providers/ListProvider/ListProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <IconProvider>
          <ListProvider>{children}</ListProvider>
        </IconProvider>
      </QueryProvider>
    </ErrorBoundary>
  )
}
