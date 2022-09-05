import { Eye, EyeClosed } from 'phosphor-react'
import { FormButton } from '../../components/FormButton'
import { Input } from '../../components/Input'

import horizonLogo from '../../assets/logoWithoutText.svg'

import {
  AccountMessage,
  FieldBox,
  FormContainer,
  FormWrapper,
  LogoContainer,
  SignUpContainer,
} from './styles'
import { useState } from 'react'

export function SignUp() {
  const [isPasswordType, setIsPasswordType] = useState(true)

  //   const { signInWithCrendentials } = useAuth()

  //   const { register, handleSubmit, formState } = useForm<SignInFormData>({
  //     resolver: zodResolver(credentialsSignInFormSchema),
  //   })

  //   function setAuthMethodInLocalStorage(method: string) {
  //     localStorage.setItem('method', method)
  //   }

  //   async function handleSignIn(data: SignInFormData) {
  //     await signInWithCrendentials(data)
  //   }

  //   const { errors } = formState

  //   const emailError = errors.email?.message
  //   const passwordError = errors.password?.message

  function handleChangeInputType() {
    setIsPasswordType(!isPasswordType)
  }

  return (
    <SignUpContainer>
      <FormContainer>
        <FormWrapper>
          <header>
            <h1>Create an account</h1>

            <p>Start sharing your photos with the world!</p>
          </header>

          <form>
            <FieldBox>
              <label htmlFor="email">E-mail</label>
              <Input placeholder="type your email" type={'text'} />
            </FieldBox>

            <FieldBox>
              <label htmlFor="password">Password</label>
              <Input
                placeholder="type your password"
                type={isPasswordType ? 'password' : 'text'}
                icon={
                  isPasswordType ? <Eye size={22} /> : <EyeClosed size={22} />
                }
                onChangeType={handleChangeInputType}
              />
            </FieldBox>

            <FormButton title="Sign Up" />
          </form>

          <AccountMessage>
            Don&apos;t have an account? <a href="/sign-up">Sign up.</a>{' '}
          </AccountMessage>

          <footer>&copy; Horizon Inc. 2022</footer>
        </FormWrapper>
      </FormContainer>

      <LogoContainer>
        <img src={horizonLogo} alt="" />
      </LogoContainer>
    </SignUpContainer>
  )
}
