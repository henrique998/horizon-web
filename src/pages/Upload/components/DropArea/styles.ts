import styled, { css } from 'styled-components'

interface DropAreaContainerProps {
  isDragReject: boolean
  isDragActive: boolean
}

export const DropAreaContainer = styled.div<DropAreaContainerProps>`
  margin-top: 6.25rem;

  background-color: #fff;
  border: 3px dashed ${(props) => props.theme['base-dropzone-border']};
  border-radius: 20px;
  padding: 2.5rem;
  cursor: pointer;

  width: 57.25rem;
  height: 20.375rem;

  display: grid;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isDragActive &&
    css`
      border-color: ${props.theme['base-dropzone-border-active']};
      background-color: ${props.theme['base-dropzone-bg-active']};
    `}

  ${(props) =>
    props.isDragReject &&
    css`
      border-color: ${props.theme.red};
      background-color: ${props.theme['base-dropzone-bg-reject']};
    `}
`

interface DropAreaContentProps {
  isDragReject: boolean
}

export const DropAreaContent = styled.div<DropAreaContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${(props) =>
      props.isDragReject
        ? props.theme['base-error-message-600']
        : props.theme['base-dropzone-border-active']};

    strong {
      color: ${(props) =>
        props.isDragReject ? props.theme.red : props.theme['base-brand-900']};
    }
  }

  span {
    color: ${(props) =>
      props.isDragReject
        ? props.theme['base-error-message-300']
        : props.theme['base-dropzone-border']};
    font-size: 0.875rem;
  }
`
