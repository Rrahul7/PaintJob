import { z } from 'zod'

export const colorSchema = z.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/, 'Invalid hex color')

export const themeConfigSchema = z.object({
  $schema: z.string().optional(),
  version: z.string(),
  colors: z.object({
    brand: z.record(colorSchema).optional(),
    semantic: z
      .object({
        success: colorSchema.optional(),
        error: colorSchema.optional(),
        warning: colorSchema.optional(),
        info: colorSchema.optional(),
      })
      .optional(),
    neutral: z.record(colorSchema).optional(),
    background: z.record(colorSchema).optional(),
    text: z.record(colorSchema).optional(),
  }),
  typography: z.object({
    fontFamilies: z.object({
      heading: z.string().optional(),
      body: z.string().optional(),
      mono: z.string().optional(),
    }),
    fontSizes: z.record(z.number().positive()),
    fontWeights: z.record(z.string()),
    lineHeights: z.record(z.number().positive()),
  }),
  spacing: z.record(z.number().nonnegative()),
  borderRadius: z.record(z.number().nonnegative()),
  shadows: z.record(z.any()).optional(),
  components: z.record(z.any()).optional(),
  darkMode: z.any().optional(),
})

export type ThemeConfig = z.infer<typeof themeConfigSchema>

export function validateThemeConfig(config: unknown): ThemeConfig {
  return themeConfigSchema.parse(config)
}

