import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
  SignInContainer,
} from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const credentialsSignInFormSchema = zod.object({
  email: zod
    .string()
    .trim()
    .min(1, 'Campo obrigatório')
    .email('Infome um email válido!'),
  password: zod.string().trim().min(6, 'Campo obrigatório!'),
})

type SignInFormData = zod.infer<typeof credentialsSignInFormSchema>

export function SignIn() {
  const [isPasswordType, setIsPasswordType] = useState(true)

  const { signIn } = useAuth()

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(credentialsSignInFormSchema),
  })

  async function handleSignIn(data: SignInFormData) {
    await signIn(data)
  }

  const { errors } = formState

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  function handleChangeInputType() {
    setIsPasswordType(!isPasswordType)
  }

  return (
    <SignInContainer>
      <LogoContainer>
        <img src={horizonLogo} alt="" />
      </LogoContainer>

      <FormContainer>
        <FormWrapper>
          <header>
            <h1>We missed you</h1>

            <p>Login to your account to enjoy the platform</p>
          </header>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <FieldBox>
              <label htmlFor="email">E-mail</label>
              <Input
                placeholder="type your email"
                type={'text'}
                error={emailError}
                {...register('email')}
              />
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
                error={passwordError}
                {...register('password')}
              />
            </FieldBox>

            <FormButton title="Sign In" />
          </form>

          <AccountMessage>
            Don&apos;t have an account? <a href="/sign-up">Sign up.</a>{' '}
          </AccountMessage>

          <footer>&copy; Horizon Inc. 2022</footer>
        </FormWrapper>
      </FormContainer>
    </SignInContainer>
  )
}
