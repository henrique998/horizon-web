import { HTMLAttributes } from 'react'
import { ButtonElement } from './styles'

interface FormButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
  isLoading?: boolean
}

export function FormButton({ title, isLoading, ...props }: FormButtonProps) {
  return (
    <ButtonElement
      {...props}
      type="submit"
      isLoading={isLoading}
      disabled={isLoading}
    >
      {title}
    </ButtonElement>
  )
}
