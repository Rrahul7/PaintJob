import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  variant?: 'default' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
  disabled?: boolean
  fullWidth?: boolean
}

