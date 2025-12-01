import { api } from '@/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { IBookDetails } from '@/interfaces/IBookDetails'
import type { IBook } from '@/interfaces/IBook'

export function useBooksData() {
  return useQuery({
    queryKey: ['books'],
    queryFn: () => api.get<IBook[]>('books').then((res) => res.data ?? []),
  })
}

export function useBookDetailsData(id: string | undefined) {
  return useQuery({
    queryKey: ['books', id],
    queryFn: () => api.get<IBookDetails>(`books/${id}`).then((res) => res.data),
    enabled: !!id,
  })
}

export function useCreateBook() {
  return useMutation({
    mutationFn: (book: IBookDetails) =>
      api.post(`books`, book).then((res) => res.data),
    mutationKey: ['createBook'],
  })
}

export function useUpdateBook(id: string | undefined) {
  return useMutation({
    mutationFn: (book: IBookDetails) =>
      api.put<IBookDetails>(`books/${id}`, book).then((res) => res.data),
    mutationKey: ['updateBook', id],
  })
}

export function useDeleteBook(id: string | undefined) {
  return useMutation({
    mutationKey: ['deleteBook', id],
    mutationFn: () => api.delete<void>(`books/${id}`).then((res) => res.data),
  })
}
