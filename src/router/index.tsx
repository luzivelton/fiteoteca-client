import { BookDetails } from '@/pages/BookDetails/BookDetails'
import { Books } from '@/pages/Books/Books'
import { BooksProvider } from '@/providers/BooksProvider/BooksProvider'
import { Route, Switch } from 'react-router-dom'

export function Router() {
  return (
    <BooksProvider>
      <Switch>
        <Route path='/:id' component={BookDetails} />
        <Route path='/' component={Books} />
      </Switch>
    </BooksProvider>
  )
}
