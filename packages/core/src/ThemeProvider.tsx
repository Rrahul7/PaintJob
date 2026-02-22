import React, { createContext, useState, useMemo, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createTheme, createDarkTheme } from './createTheme'
import { PaintJobConfig, ThemeContextValue } from './types'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

interface ThemeProviderProps {
  config: PaintJobConfig
  defaultTheme?: 'light' | 'dark'
  children: ReactNode
}

export function ThemeProvider({
  config,
  defaultTheme = 'light',
  children,
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(defaultTheme)

  const { lightTheme, darkTheme } = useMemo(() => {
    const light = createTheme(config)
    const dark = createDarkTheme(light, config.darkMode)
    return { lightTheme: light, darkTheme: dark }
  }, [config])

  const theme = currentTheme === 'light' ? lightTheme : darkTheme

  const contextValue: ThemeContextValue = {
    theme: currentTheme,
    toggleTheme: () => setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light')),
    setTheme: setCurrentTheme,
    config,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }
  return context
}

