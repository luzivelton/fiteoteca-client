type Format = 'short' | 'default'

const FORMATS: Record<Format, Intl.DateTimeFormatOptions> = {
  short: { month: 'short', day: 'numeric', year: 'numeric' },
  default: { month: 'long', day: 'numeric', year: 'numeric' },
}

const UTC_SUFFIX = 'Z'
const TIMEZONE_REGEX = /Z$|[+-]\d{2}:\d{2}$/
const TIME_SEPARATOR = 'T'
const TIME_APPEND = 'T00:00:00Z'

const hasTimezone = (date: string) => TIMEZONE_REGEX.test(date)
const hasTimeSeparator = (date: string) => date.includes(TIME_SEPARATOR)

function toUTCDateString(date: string): string {
  if (!date) return date
  const containsTimezone = hasTimezone(date)
  const containsTimeSeparator = hasTimeSeparator(date)

  if (containsTimezone) return date

  if (containsTimeSeparator) {
    return date.replace(/(T.*)$/, `$1${UTC_SUFFIX}`)
  }

  return date + TIME_APPEND
}

export function formatDate(date: string, format: Format): string {
  const utcDateString = toUTCDateString(date)
  const d = new Date(utcDateString)

  if (isNaN(d.getTime())) return '-'

  return d.toLocaleDateString('en-US', {
    ...FORMATS[format],
    timeZone: 'UTC',
  })
}
