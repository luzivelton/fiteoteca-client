const fixURL = (url: string | undefined) => url && url.replace(/\/+$/, '') + '/'

const FALLBACK_API_URL = 'https://f'
const VITE_DEV_API_URL = fixURL(import.meta.env.VITE_DEV_API_URL)

export const API_URL = VITE_DEV_API_URL || FALLBACK_API_URL
