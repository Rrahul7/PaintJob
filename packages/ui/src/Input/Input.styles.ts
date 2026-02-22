import styled from 'styled-components/native'
import { InputProps } from './Input.types'

export const StyledInput = styled.TextInput<InputProps>`
  ${({ theme, variant = 'default' }) => {
    const variantStyles = theme.components?.Input?.variants?.[variant]
    if (!variantStyles) {
      return `
        background-color: ${theme.colors.background.primary};
        border-width: 1px;
        border-color: ${theme.colors.neutral.gray};
        border-radius: ${theme.borderRadius.md}px;
      `
    }
    return `
      background-color: ${variantStyles.backgroundColor || theme.colors.background.primary};
      ${variantStyles.borderWidth ? `border-width: ${variantStyles.borderWidth}px;` : ''}
      ${variantStyles.borderColor ? `border-color: ${variantStyles.borderColor};` : ''}
      border-radius: ${variantStyles.borderRadius || theme.borderRadius.md}px;
    `
  }}

  ${({ theme, size = 'md' }) => {
    const sizeStyles = theme.components?.Input?.sizes?.[size]
    if (!sizeStyles) {
      return `
        padding-horizontal: ${theme.spacing.md}px;
        padding-vertical: ${theme.spacing.sm}px;
        font-size: ${theme.typography.fontSizes.base}px;
      `
    }
    return `
      padding-horizontal: ${sizeStyles.paddingX || theme.spacing.md}px;
      padding-vertical: ${sizeStyles.paddingY || theme.spacing.sm}px;
      font-size: ${sizeStyles.fontSize || theme.typography.fontSizes.base}px;
    `
  }}

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};

  ${({ error, theme }) =>
    error &&
    `
    border-color: ${theme.colors.semantic.error};
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`

