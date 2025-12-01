import type { AppLayoutProps } from '@/layouts/AppLayout/AppLayout.types'
import clsx from 'clsx'
import styles from './AppLayout.module.scss'

export function AppLayout({ children, className, ...props }: AppLayoutProps) {
  return (
    <section className={clsx(styles.container, className)} {...props}>
      {children}
    </section>
  )
}

type ContentProps = React.JSX.IntrinsicElements['main'] & {
  children: React.ReactNode
}

AppLayout.Content = Content

function Content({ children, className, ...props }: ContentProps) {
  return (
    <main className={clsx(styles.content, className)} {...props}>
      {children}
    </main>
  )
}

type HeaderProps = React.JSX.IntrinsicElements['header']

AppLayout.Header = Header
function Header({ children, className, ...props }: HeaderProps) {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      {children}
    </header>
  )
}
