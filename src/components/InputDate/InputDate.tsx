import { Input } from '@/components/Input/Input'
import type { InputProps } from '@/components/Input/Input.types'

type InputDateProps = InputProps

export function InputDate({ ...props }: InputDateProps) {
  return <Input {...props} type='date' />
}
