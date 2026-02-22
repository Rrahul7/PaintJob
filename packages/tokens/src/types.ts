export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface PaintJobConfig {
  $schema?: string
  version: string
  colors: {
    brand?: Record<string, string>
    semantic?: {
      success?: string
      error?: string
      warning?: string
      info?: string
    }
    neutral?: Record<string, string>
    background?: Record<string, string>
    text?: Record<string, string>
  }
  typography: {
    fontFamilies: {
      heading?: string
      body?: string
      mono?: string
    }
    fontSizes: Record<string, number>
    fontWeights: Record<string, string>
    lineHeights: Record<string, number>
  }
  spacing: Record<string, number>
  borderRadius: Record<string, number>
  shadows?: Record<string, any>
  components?: Record<string, ComponentConfig>
  darkMode?: Partial<PaintJobConfig>
}

export interface ComponentConfig {
  variants?: Record<string, Record<string, any>>
  sizes?: Record<string, Record<string, any>>
  defaultProps?: Record<string, any>
}

