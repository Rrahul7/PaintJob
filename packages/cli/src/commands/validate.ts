import fs from 'fs'
import { validateThemeConfig } from '@paintjob/tokens'

export function validateCommand(configPath: string) {
  if (!fs.existsSync(configPath)) {
    console.log(`❌ Config file not found: ${configPath}`)
    return
  }

  try {
    const configContent = fs.readFileSync(configPath, 'utf-8')
    const config = JSON.parse(configContent)
    validateThemeConfig(config)
    console.log('✅ Configuration is valid!')
  } catch (error) {
    console.log('❌ Validation failed:')
    console.error(error)
  }
}

