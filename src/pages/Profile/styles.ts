import styled from 'styled-components'

export const ProfileContainer = styled.section`
  margin: 5rem auto 3.5rem;

  text-align: center;

  h1 {
    font-size: 2.25rem;
    font-weight: 500;
  }

  img {
    display: block;

    margin-top: 4.375rem;
    margin-left: auto;
    margin-right: auto;

    width: 12.5rem;
    height: 12.5rem;
    border-radius: 50%;
    border: 4px solid ${(props) => props.theme['base-brand-600']};
  }

  form {
    margin-top: 2.25rem;

    label {
      background-color: ${(props) => props.theme['base-brand-100']};
      color: ${(props) => props.theme['base-brand-900']};

      width: fit-content;
      margin: 0 auto;
      cursor: pointer;

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
    }
  }
`
