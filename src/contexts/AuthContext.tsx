import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/axios'

type User = {
  id: string
  name: string
  email: string
  avatar_url?: string
}

interface IResponse {
  token: string
  userData: User
}

type SignInCredentials = {
  email: string
  password: string
}

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

type AuthContextData = {
  signIn: (data: SignInCredentials) => Promise<void>
  signUp: (data: SignUpCredentials) => Promise<void>
  handleSignOut: () => void
  user: User
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

const token = localStorage.getItem('@horizon:token')

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      api
        .get('/accounts/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error.response.data.message))
    }
  }, [])

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const response = await api.post<IResponse>('/session', {
        email,
        password,
      })

      const { token, userData } = response.data

      setUser(userData)

      localStorage.setItem('@horizon:token', token)

      navigate('/home')
    },
    [navigate],
  )

  async function signUp(data: SignUpCredentials) {
    await api.post('/accounts', {
      name: data.name,
      email: data.email,
      password: data.password,
    })

    navigate('/')
  }

  function handleSignOut() {
    if (token) {
      localStorage.removeItem('@wavy:token')

      navigate('/')
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signUp, handleSignOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}
