import { ToastContext } from '@/contexts/ToastContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ToastProvider.module.scss'

export interface Toast {
  id: string
  message: string
  duration?: number
}

type ToastProviderProps = {
  children: React.ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeoutsRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    if (timeoutsRef.current[id]) {
      clearTimeout(timeoutsRef.current[id])
      delete timeoutsRef.current[id]
    }
  }, [])

  const showToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).slice(2, 11)
      setToasts((prev) => [...prev, { ...toast, id }])

      if (toast.duration !== 0) {
        timeoutsRef.current[id] = setTimeout(
          () => removeToast(id),
          toast.duration || 3000
        )
      }
    },
    [removeToast]
  )

  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout)
      timeoutsRef.current = {}
    }
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      {typeof window !== 'undefined' &&
        createPortal(
          <div className={styles.toastContainer}>
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className={styles.toast}
                onClick={() => removeToast(toast.id)}
              >
                {toast.message}
              </div>
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}
