import { PaintJobConfig, resolveTokenReferences, generateColorScales } from '@paintjob/tokens'
import { Theme } from './types'

const DEFAULT_COLORS = {
  brand: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    accent: '#F59E0B',
  },
  semantic: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#6B7280',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
  },
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
}

const DEFAULT_TYPOGRAPHY = {
  fontFamilies: {
    heading: 'System',
    body: 'System',
    mono: 'monospace',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeights: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
}

export function createTheme(config: PaintJobConfig): Theme {
  // Merge with defaults
  const mergedConfig = {
    ...config,
    colors: {
      ...DEFAULT_COLORS,
      ...config.colors,
      brand: { ...DEFAULT_COLORS.brand, ...config.colors.brand },
      semantic: { ...DEFAULT_COLORS.semantic, ...config.colors.semantic },
      neutral: { ...DEFAULT_COLORS.neutral, ...config.colors.neutral },
      background: { ...DEFAULT_COLORS.background, ...config.colors.background },
      text: { ...DEFAULT_COLORS.text, ...config.colors.text },
    },
    typography: {
      fontFamilies: {
        ...DEFAULT_TYPOGRAPHY.fontFamilies,
        ...config.typography.fontFamilies,
      },
      fontSizes: { ...DEFAULT_TYPOGRAPHY.fontSizes, ...config.typography.fontSizes },
      fontWeights: { ...DEFAULT_TYPOGRAPHY.fontWeights, ...config.typography.fontWeights },
      lineHeights: { ...DEFAULT_TYPOGRAPHY.lineHeights, ...config.typography.lineHeights },
    },
  }

  // Generate color scales
  const colorScales = generateColorScales(mergedConfig.colors)

  // Resolve token references
  const resolvedConfig = resolveTokenReferences(mergedConfig)

  const theme: Theme = {
    colors: {
      ...resolvedConfig.colors,
      scales: colorScales,
    },
    typography: resolvedConfig.typography,
    spacing: resolvedConfig.spacing,
    borderRadius: resolvedConfig.borderRadius,
    shadows: resolvedConfig.shadows || {},
    components: resolvedConfig.components || {},
  }

  return theme
}

export function createDarkTheme(lightTheme: Theme, darkModeOverrides?: any): Theme {
  if (!darkModeOverrides) {
    return lightTheme
  }

  return {
    ...lightTheme,
    colors: {
      ...lightTheme.colors,
      ...darkModeOverrides.colors,
    },
  }
}

