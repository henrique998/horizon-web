import styled from 'styled-components'

export const SignUpContainer = styled.main`
  display: flex;

  section {
    height: 100vh;
    flex: 1;
  }
`

export const LogoContainer = styled.section`
  background-color: rgba(27, 190, 208, 0.08);
  display: none;

  img {
    width: 10.625rem;
    height: 9.375rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
`

export const FormWrapper = styled.div`
  padding: 1rem;
  width: 100%;

  max-width: 27.75rem;

  margin-left: auto;
  margin-right: auto;

  header {
    text-align: center;

    h1,
    p {
      color: ${(props) => props.theme['base-text']};
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 44px;
    }

    p {
      font-size: 0.875rem;
    }
  }

  form {
    margin-top: 3.75rem;

    display: grid;
    gap: 1.5rem;
  }

  footer {
    margin-top: 1.5rem;

    text-align: center;
    color: rgba(50, 48, 49, 0.25);

    font-size: 0.75rem;
  }

  @media screen and (min-width: 768px) {
    .form-wrapper {
      max-width: 24.125rem;
      margin: 0 auto;

      header {
        margin-top: 1rem;
      }

      form {
        margin-top: 1.75rem;
        gap: 1rem;
      }

      footer {
        margin-top: 2rem;
      }
    }
  }
`

export const FieldBox = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
`

export const AuthOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  margin-top: 2.125rem;
`

export const AccountMessage = styled.span`
  display: block;
  margin-top: 2.125rem;
  text-align: center;
  color: ${(props) => props.theme['base-text']};
  line-height: 22px;

  font-size: 0.875rem;

  a {
    color: ${(props) => props.theme['base-brand-900']};
  }
`
