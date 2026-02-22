import React from 'react'
import { StyledText } from './Text.styles'
import { TextProps } from './Text.types'

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  size = 'base',
  weight = 'normal',
  color,
  align = 'left',
  ...props
}) => {
  return (
    <StyledText variant={variant} size={size} weight={weight} color={color} align={align} {...props}>
      {children}
    </StyledText>
  )
}

