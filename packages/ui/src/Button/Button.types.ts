import { ReactNode } from 'react'
import { PressableProps } from 'react-native'

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}

