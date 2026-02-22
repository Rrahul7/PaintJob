import styled from 'styled-components/native'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.Pressable<ButtonProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ theme, variant = 'primary' }) => {
    const variantStyles = theme.components?.Button?.variants?.[variant]
    if (!variantStyles) {
      return `
        background-color: ${theme.colors.brand.primary};
        border-radius: ${theme.borderRadius.md}px;
      `
    }
    return `
      background-color: ${variantStyles.backgroundColor || theme.colors.brand.primary};
      border-radius: ${variantStyles.borderRadius || theme.borderRadius.md}px;
      ${variantStyles.borderWidth ? `border-width: ${variantStyles.borderWidth}px;` : ''}
      ${variantStyles.borderColor ? `border-color: ${variantStyles.borderColor};` : ''}
    `
  }}

  ${({ theme, size = 'md' }) => {
    const sizeStyles = theme.components?.Button?.sizes?.[size]
    if (!sizeStyles) {
      return `
        padding-horizontal: ${theme.spacing.md}px;
        padding-vertical: ${theme.spacing.sm}px;
      `
    }
    return `
      padding-horizontal: ${sizeStyles.paddingX || theme.spacing.md}px;
      padding-vertical: ${sizeStyles.paddingY || theme.spacing.sm}px;
    `
  }}

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

export const ButtonText = styled.Text<ButtonProps>`
  ${({ theme, variant = 'primary' }) => {
    const variantStyles = theme.components?.Button?.variants?.[variant]
    return `
      color: ${variantStyles?.color || theme.colors.neutral.white};
    `
  }}

  ${({ theme, size = 'md' }) => {
    const sizeStyles = theme.components?.Button?.sizes?.[size]
    return `
      font-size: ${sizeStyles?.fontSize || theme.typography.fontSizes.base}px;
    `
  }}

  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
`

