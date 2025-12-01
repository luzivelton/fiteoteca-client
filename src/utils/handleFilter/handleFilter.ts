function escapeRegex(search: string) {
  return search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function normalizeString(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function standardizeString(str: string) {
  return escapeRegex(normalizeString(String(str)))
}

export const handleFilter = (input: string, option: string[]) => {
  const inputStd = input && standardizeString(String(input).trim())
  const inputRegex = new RegExp(inputStd, 'i')

  const isMatch =
    option &&
    option.some((opt) => inputRegex.test(standardizeString(String(opt))))

  return isMatch
}
