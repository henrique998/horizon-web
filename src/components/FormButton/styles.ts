import styled, { css } from 'styled-components'

interface ButtonElementProps {
  isLoading?: boolean
}

export const ButtonElement = styled.button<ButtonElementProps>`
  height: 3rem;
  width: 100%;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.theme['base-brand-900']};
  border-radius: 6px;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.92);
  }

  ${(props) =>
    props.isLoading &&
    css`
      opacity: 0.75;
    `}
`
