# 🎨 PaintJob

A user-friendly, JSON-driven design system for React Native and Next.js applications.

## ✨ Features

- 🎯 **JSON-Driven**: Configure your entire design system with a simple JSON file
- 🌓 **Dark Mode**: Built-in dark mode support with easy overrides
- 📱 **Cross-Platform**: Works seamlessly with React Native and Next.js
- 🎨 **Auto-Generated Color Scales**: Automatically generate 11-step color scales from base colors
- 💪 **TypeScript-First**: Full TypeScript support with type safety
- 🔧 **Customizable**: Extend and customize components via JSON or code
- 🚀 **CLI Tool**: Initialize and validate your configuration with ease

## 📦 Packages

This monorepo contains the following packages:

- **@paintjob/tokens**: Core token utilities, validators, and transformers
- **@paintjob/core**: Theme engine, provider, and hooks
- **@paintjob/ui**: Pre-built UI components (Button, Text, Input, etc.)
- **@paintjob/cli**: Command-line tool for initialization and validation

## 🚀 Quick Start

### Installation

```bash
# Using yarn
yarn add @paintjob/core @paintjob/ui

# Using npm
npm install @paintjob/core @paintjob/ui
```

### Initialize Configuration

```bash
npx paintjob init
```

This creates a `paintjob.config.json` file in your project root.

### Basic Usage

```tsx
import { ThemeProvider } from '@paintjob/core'
import { Button, Text } from '@paintjob/ui'
import config from './paintjob.config.json'

function App() {
  return (
    <ThemeProvider config={config}>
      <Text variant="heading" size="2xl">Welcome to PaintJob!</Text>
      <Button variant="primary" size="md">Get Started</Button>
    </ThemeProvider>
  )
}
```

## 📝 Configuration

Example `paintjob.config.json`:

```json
{
  "version": "0.1.0",
  "colors": {
    "brand": {
      "primary": "#3B82F6",
      "secondary": "#8B5CF6"
    },
    "semantic": {
      "success": "#10B981",
      "error": "#EF4444",
      "warning": "#F59E0B",
      "info": "#3B82F6"
    }
  },
  "typography": {
    "fontFamilies": {
      "heading": "System",
      "body": "System",
      "mono": "monospace"
    },
    "fontSizes": {
      "xs": 12,
      "sm": 14,
      "base": 16,
      "lg": 18,
      "xl": 20
    },
    "fontWeights": {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    },
    "lineHeights": {
      "tight": 1.25,
      "normal": 1.5,
      "relaxed": 1.75
    }
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32
  },
  "borderRadius": {
    "sm": 4,
    "md": 8,
    "lg": 12,
    "full": 9999
  }
}
```

## 🛠️ Development

This project uses Yarn workspaces and Turborepo for monorepo management.

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run in development mode
yarn dev

# Lint all packages
yarn lint
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

