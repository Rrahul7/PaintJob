import { PaintJobConfig } from '@paintjob/tokens'

export interface Theme {
  colors: {
    brand: Record<string, any>
    semantic: {
      success: string
      error: string
      warning: string
      info: string
    }
    neutral: Record<string, string>
    background: Record<string, string>
    text: Record<string, string>
  }
  typography: {
    fontFamilies: {
      heading: string
      body: string
      mono: string
    }
    fontSizes: Record<string, number>
    fontWeights: Record<string, string>
    lineHeights: Record<string, number>
  }
  spacing: Record<string, number>
  borderRadius: Record<string, number>
  shadows: Record<string, any>
  components: Record<string, any>
}

export interface ThemeContextValue {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
  config: PaintJobConfig
}

export type { PaintJobConfig }

