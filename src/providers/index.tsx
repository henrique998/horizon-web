import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from '../contexts/AuthContext'
import { UploadContextProvider } from '../contexts/UploadContext'
import { defaultTheme } from '../styles/themes/default'

interface ProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <UploadContextProvider>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
          </UploadContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
