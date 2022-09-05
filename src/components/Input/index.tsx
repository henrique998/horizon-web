/* eslint-disable react/display-name */
import { WarningCircle } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes, ReactElement, ReactSVG } from 'react'

import {
  InputContainer,
  InputWrapper,
  InputElement,
  ErrorMessage,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  icon?: ReactElement<ReactSVG>
  onChangeType?: () => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, onChangeType, ...props }, ref) => {
    return (
      <InputContainer>
        <InputWrapper hasError={!!error}>
          <InputElement ref={ref} {...props} />
          {icon && (
            <button onClick={onChangeType} type={'button'}>
              {icon}
            </button>
          )}
        </InputWrapper>

        {error && (
          <ErrorMessage>
            <WarningCircle size={20} />
            {error}
          </ErrorMessage>
        )}
      </InputContainer>
    )
  },
)
