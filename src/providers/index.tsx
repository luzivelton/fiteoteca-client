import { QueryProvider } from './QueryProvider/QueryProvider'
import { IconProvider } from './IconProvider/IconProvider'
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary'
import { ListProvider } from '@/providers/ListProvider/ListProvider'
import { ToastProvider } from '@/providers/ToastProvider/ToastProvider'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <QueryProvider>
          <IconProvider>
            <ListProvider>{children}</ListProvider>
          </IconProvider>
        </QueryProvider>
      </ToastProvider>
    </ErrorBoundary>
  )
}
