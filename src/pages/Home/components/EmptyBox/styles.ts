import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EmptyBoxContainer = styled.div`
  margin-top: 11.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  p {
    color: ${(props) => props.theme.gray};
  }
`

export const Button = styled(Link)`
  margin-top: 2.5rem;
  margin-right: 1.5rem;

  background-color: ${(props) => props.theme['base-brand-100']};
  color: ${(props) => props.theme['base-brand-900']};

  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem 0.75rem;
  border-radius: 6px;

  &:hover {
    filter: brightness(0.95);
    transition: 0.2s;
  }
`
