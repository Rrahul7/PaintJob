import fs from 'fs'
import path from 'path'

const defaultConfig = {
  version: '0.1.0',
  colors: {
    brand: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
    },
    semantic: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    },
  },
  typography: {
    fontFamilies: {
      heading: 'System',
      body: 'System',
      mono: 'monospace',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
}

export function initCommand() {
  const configPath = path.join(process.cwd(), 'paintjob.config.json')

  if (fs.existsSync(configPath)) {
    console.log('❌ paintjob.config.json already exists')
    return
  }

  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2))
  console.log('✅ Created paintjob.config.json')
}

