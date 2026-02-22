import { ReactNode } from 'react'
import { TextProps as RNTextProps } from 'react-native'

export interface TextProps extends RNTextProps {
  children: ReactNode
  variant?: 'body' | 'heading' | 'caption' | 'label'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  color?: string
  align?: 'left' | 'center' | 'right'
}

