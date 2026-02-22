import React from 'react'
import { StyledButton, ButtonText } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      <ButtonText variant={variant} size={size}>
        {children}
      </ButtonText>
    </StyledButton>
  )
}

