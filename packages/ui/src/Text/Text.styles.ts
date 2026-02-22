import styled from 'styled-components/native'
import { TextProps } from './Text.types'

export const StyledText = styled.Text<TextProps>`
  ${({ theme, variant = 'body' }) => {
    const fontFamily =
      variant === 'heading' ? theme.typography.fontFamilies.heading : theme.typography.fontFamilies.body
    return `
      font-family: ${fontFamily};
    `
  }}

  ${({ theme, size = 'base' }) => `
    font-size: ${theme.typography.fontSizes[size]}px;
  `}

  ${({ theme, weight = 'normal' }) => `
    font-weight: ${theme.typography.fontWeights[weight]};
  `}

  ${({ theme, color }) => `
    color: ${color || theme.colors.text.primary};
  `}

  ${({ align = 'left' }) => `
    text-align: ${align};
  `}
`

