import { useTheme as useStyledTheme } from 'styled-components'
import { useThemeContext } from './ThemeProvider'
import { Theme } from './types'

export function useTheme() {
  const styledTheme = useStyledTheme() as Theme
  const themeContext = useThemeContext()

  return {
    ...styledTheme,
    mode: themeContext.theme,
    toggleTheme: themeContext.toggleTheme,
    setTheme: themeContext.setTheme,
  }
}

