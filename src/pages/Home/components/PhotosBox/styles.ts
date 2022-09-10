import styled from 'styled-components'

export const PhotosBoxContainer = styled.div`
  max-width: 60rem;
  margin: 0 auto;

  header {
    margin-top: 5rem;

    text-align: center;

    h1 {
      font-size: 2.26rem;
      font-weight: 500;
      color: ${(props) => props.theme['base-text']};
    }

    p {
      margin-top: 1rem;
      color: ${(props) => props.theme.gray};
      font-size: 1.25rem;
    }
  }
`

export const PhotosContainer = styled.ul`
  margin-top: 6.5rem;
  margin-bottom: 3.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`

export const PhotoBox = styled.li`
  position: relative;
  width: fit-content;

  img {
    width: 18.75rem;
    height: 18.75rem;
    border-radius: 10px;
    object-fit: contain;
  }

  button {
    position: absolute;
    z-index: 2;
    bottom: 1rem;
    right: 0.75rem;

    background-color: ${(props) => props.theme['base-brand-900']};
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.5rem 0.75rem;
    border-radius: 6px;

    &:hover {
      filter: brightness(0.9);
      transition: 0.2s;
    }
  }
`
