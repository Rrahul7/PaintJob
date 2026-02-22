import Color from 'color'
import { ColorScale } from './types'

/**
 * Generate a color scale (50-950) from a base color
 */
export function generateColorScale(baseColor: string): ColorScale {
  const color = Color(baseColor)

  return {
    50: color.lighten(0.4).hex(),
    100: color.lighten(0.35).hex(),
    200: color.lighten(0.25).hex(),
    300: color.lighten(0.15).hex(),
    400: color.lighten(0.05).hex(),
    500: baseColor,
    600: color.darken(0.1).hex(),
    700: color.darken(0.2).hex(),
    800: color.darken(0.3).hex(),
    900: color.darken(0.4).hex(),
    950: color.darken(0.5).hex(),
  }
}

/**
 * Auto-generate color scales for all brand colors
 */
export function generateColorScales(colors: Record<string, any>): Record<string, ColorScale> {
  const scales: Record<string, ColorScale> = {}

  if (colors.brand) {
    Object.entries(colors.brand).forEach(([name, value]) => {
      if (typeof value === 'string') {
        scales[name] = generateColorScale(value)
      }
    })
  }

  return scales
}

/**
 * Validate if a string is a valid hex color
 */
export function isValidHexColor(color: string): boolean {
  return /^#([0-9A-Fa-f]{3}){1,2}$/.test(color)
}

/**
 * Convert hex to rgba
 */
export function hexToRgba(hex: string, alpha: number = 1): string {
  const color = Color(hex)
  return color.alpha(alpha).rgb().string()
}

