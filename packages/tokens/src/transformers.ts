/**
 * Resolve token references like $brand.primary → #3B82F6
 */
export function resolveTokenReferences(config: any, context = config): any {
  if (typeof config === 'string' && config.startsWith('$')) {
    // Extract path: $brand.primary → ['brand', 'primary']
    const path = config.slice(1).split('.')

    // Navigate to the value
    let value = context
    for (const key of path) {
      value = value[key]
      if (value === undefined) {
        throw new Error(`Token reference not found: ${config}`)
      }
    }

    // Recursively resolve if the value is also a reference
    return typeof value === 'string' && value.startsWith('$')
      ? resolveTokenReferences(value, context)
      : value
  }

  if (Array.isArray(config)) {
    return config.map(item => resolveTokenReferences(item, context))
  }

  if (typeof config === 'object' && config !== null) {
    const resolved: any = {}
    for (const [key, value] of Object.entries(config)) {
      resolved[key] = resolveTokenReferences(value, context)
    }
    return resolved
  }

  return config
}

/**
 * Flatten nested object to dot notation
 * { colors: { brand: { primary: '#000' } } } → { 'colors.brand.primary': '#000' }
 */
export function flattenObject(obj: any, prefix = ''): Record<string, any> {
  const flattened: Record<string, any> = {}

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value, newKey))
    } else {
      flattened[newKey] = value
    }
  }

  return flattened
}

