import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

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
  setUser: (user: User) => void
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
      try {
        const response = await api.post<IResponse>('/session', {
          email,
          password,
        })

        const { token, userData } = response.data

        setUser(userData)

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        localStorage.setItem('@horizon:token', token)

        navigate('/home')
      } catch (err) {
        console.log(err)
      }
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
      localStorage.removeItem('@horizon:token')

      navigate('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
