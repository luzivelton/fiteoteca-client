import { BookDetailsContent } from '@/pages/BookDetails/components/BookDetailsContent/BookDetailsContent'
import { BookDetailsProvider } from '@/providers/BookDetailsProvider/BookDetailsProvider'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'
import { BookDetailsHeader } from '@/pages/BookDetails/components/BookDetailsHeader/BookDetailsHeader'

export function BookDetails() {
  return (
    <AppLayout>
      <AppLayout.Content>
        <BookDetailsProvider>
          <BookDetailsHeader />
          <BookDetailsContent />
        </BookDetailsProvider>
      </AppLayout.Content>
    </AppLayout>
  )
}
