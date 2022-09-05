import styled from 'styled-components'

export const UploadedImagesListContainer = styled.ul`
  margin: 2.5rem 0;

  li + li {
    margin-top: 1rem;
  }
`

export const ImageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 15px;
  padding: 1rem;
`

export const ImageDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  img {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    strong {
      display: block;
      color: ${(props) => props.theme.gray};
      font-weight: 400;
    }

    span {
      color: ${(props) => props.theme.gray};
    }
  }
`

export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

export const DeleteButton = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme['base-error-message-300']};
  color: ${(props) => props.theme.red};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.95);
    transition: 0.2s;
  }
`
