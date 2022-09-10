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
  SignUpContainer,
} from './styles'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from 'react-hook-form'

const credentialsSignUpFormSchema = zod.object({
  name: zod.string().trim().min(1, 'Campo obrigatório!'),
  email: zod
    .string()
    .trim()
    .min(1, 'Campo obrigatório')
    .email('Infome um email válido!'),
  password: zod.string().trim().min(6, 'Campo obrigatório!'),
})

type SignUpFormData = zod.infer<typeof credentialsSignUpFormSchema>

export function SignUp() {
  const [isPasswordType, setIsPasswordType] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const { signUp } = useAuth()

  const { register, handleSubmit, formState } = useForm<SignUpFormData>({
    resolver: zodResolver(credentialsSignUpFormSchema),
  })

  async function handleSignUp(data: SignUpFormData) {
    setIsLoading(true)

    await signUp({
      name: data.name,
      email: data.email,
      password: data.password,
    })
  }

  const { errors } = formState

  const nameError = errors.name?.message
  const emailError = errors.email?.message
  const passwordError = errors.password?.message

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

          <form onSubmit={handleSubmit(handleSignUp)}>
            <FieldBox>
              <label htmlFor="name">Name</label>
              <Input
                placeholder="type your name"
                type={'text'}
                {...register('name')}
                error={nameError}
              />
            </FieldBox>

            <FieldBox>
              <label htmlFor="email">E-mail</label>
              <Input
                placeholder="type your email"
                type={'email'}
                {...register('email')}
                error={emailError}
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
                {...register('password')}
                error={passwordError}
              />
            </FieldBox>

            <FormButton title="Sign Up" isLoading={isLoading} />
          </form>

          <AccountMessage>
            Already have an account? <a href="/">Sign In.</a>{' '}
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
