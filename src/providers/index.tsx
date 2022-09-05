import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UploadContextProvider } from '../contexts/UploadContext'
import { defaultTheme } from '../styles/themes/default'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <UploadContextProvider>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </UploadContextProvider>
    </BrowserRouter>
  )
}
