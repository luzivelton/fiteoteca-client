const FALLBACK_API_URL = 'https://fiteoteca-api.onrender.com'
const VITE_DEV_API_URL = import.meta.env.VITE_DEV_API_URL

export const API_URL = `${VITE_DEV_API_URL || FALLBACK_API_URL}/api`
