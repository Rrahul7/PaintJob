import React from 'react'
import { StyledInput } from './Input.styles'
import { InputProps } from './Input.types'

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  error = false,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledInput
      variant={variant}
      size={size}
      error={error}
      disabled={disabled}
      fullWidth={fullWidth}
      editable={!disabled}
      {...props}
    />
  )
}

