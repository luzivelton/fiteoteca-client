import { Loading } from '@/components/Loading/Loading'

interface ArticleLoaderProps {
  children: React.ReactNode
  isLoading: boolean
}

export function ArticleLoader({ children, isLoading }: ArticleLoaderProps) {
  if (isLoading) {
    return <Loading />
  }

  return <>{children}</>
}
