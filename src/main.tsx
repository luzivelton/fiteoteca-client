import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from '@/providers'
import './styles/index.scss'
import { Router } from '@/router'
import { BrowserRouter } from 'react-router-dom'

async function enableMocking() {
  if (!import.meta.env.VITE_ENABLE_MOCK) {
    return
  }
  const { worker } = await import('./__mocks__/browser')
  return worker.start()
}

const rootElement = document.getElementById('root')

enableMocking().then(() => {
  createRoot(rootElement!).render(
    <StrictMode>
      <BrowserRouter>
        <Providers>
          <Router />
        </Providers>
      </BrowserRouter>
    </StrictMode>
  )
})
