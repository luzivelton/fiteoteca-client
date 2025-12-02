import { MOCK_BOOKS } from '@/__mocks__/data/books'
import { API_URL } from '@/config/env'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(`${API_URL}/books`, () => {
    return HttpResponse.json(MOCK_BOOKS)
  }),
  http.post(`${API_URL}/books`, () => {
    return HttpResponse.json({ message: 'Book created successfully' })
  }),
  http.patch(`${API_URL}/books/:id`, () => {
    return HttpResponse.json({ message: 'Book updated successfully' })
  }),
  http.delete(`${API_URL}/books/:id`, () => {
    return HttpResponse.json({ message: 'Book deleted successfully' })
  }),

  http.post(`${API_URL}/upload/sign`, () => {
    return HttpResponse.json({ url: 'https://example.com/signed-url' })
  }),

  http.put('https://example.com/signed-url', () => {
    return HttpResponse.json()
  }),
]
