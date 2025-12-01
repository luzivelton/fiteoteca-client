import type { IBook } from '@/interfaces/IBook'

export const MOCK_BOOKS: IBook[] = [
  {
    id: '0',
    title: 'A revolução dos bichos: Um conto de fadas',
    description:
      'Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista.',
    publishedDate: '1945-08-17',
    imageUrl: 'https://test.com/',
  },
  {
    id: '1',
    title: 'Dom Casmurro',
    description:
      'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira.',
    publishedDate: '1899-01-01',
    imageUrl: 'https://test.com',
  },
]
