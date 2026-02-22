# 📦 Publishing Guide for PaintJob

This guide explains how to publish PaintJob packages to npm.

## Prerequisites

1. **npm Account**: Create an account at https://www.npmjs.com/signup
2. **npm Login**: Login to npm from your terminal
   ```bash
   npm login
   ```
3. **Build Packages**: Ensure all packages build successfully

## Package Publishing Order

Due to dependencies between packages, publish in this order:

1. `@paintjob/tokens` (no dependencies)
2. `@paintjob/core` (depends on tokens)
3. `@paintjob/ui` (depends on core)
4. `@paintjob/cli` (depends on tokens)

## Step-by-Step Publishing Process

### 1. Install Dependencies

```bash
yarn install
```

### 2. Build All Packages

```bash
yarn build
```

This will compile TypeScript to JavaScript in the `dist/` folder for each package.

### 3. Test Builds Locally (Optional but Recommended)

You can test packages locally before publishing:

```bash
# In each package directory
cd packages/tokens
npm pack
# This creates a .tgz file you can test with `npm install /path/to/file.tgz`
```

### 4. Publish Packages

#### Option A: Publish All Packages (Recommended for first publish)

From the root directory:

```bash
# Publish tokens first
cd packages/tokens
npm publish

# Publish core
cd ../core
npm publish

# Publish ui
cd ../ui
npm publish

# Publish cli
cd ../cli
npm publish
```

#### Option B: Using Lerna or Changesets (For Future Updates)

For easier version management in the future, consider using:
- **Lerna**: `npx lerna publish`
- **Changesets**: `npx changeset publish`

### 5. Verify Publication

Check that your packages are published:
- https://www.npmjs.com/package/@paintjob/tokens
- https://www.npmjs.com/package/@paintjob/core
- https://www.npmjs.com/package/@paintjob/ui
- https://www.npmjs.com/package/@paintjob/cli

## Version Management

### Updating Versions

Before publishing updates, update version numbers:

```bash
# In each package directory
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0
```

### Keeping Dependencies in Sync

When updating versions, ensure internal dependencies are updated:

For example, if you update `@paintjob/tokens` to `0.2.0`, update the dependency in:
- `packages/core/package.json`
- `packages/cli/package.json`

Change from:
```json
"@paintjob/tokens": "^0.1.0"
```
to:
```json
"@paintjob/tokens": "^0.2.0"
```

## Troubleshooting

### Package Name Already Exists

If `@paintjob` scope is taken, you can:
1. Use a different scope: `@your-username/paintjob-tokens`
2. Use unscoped names: `paintjob-tokens`

Update all `package.json` files accordingly.

### Permission Denied

Make sure you're logged in and have permission to publish to the `@paintjob` scope:

```bash
npm login
npm whoami
```

### Build Errors

If builds fail:
```bash
# Clean all dist folders
yarn clean

# Reinstall dependencies
rm -rf node_modules
yarn install

# Try building again
yarn build
```

## Publishing Checklist

- [ ] All tests pass (when tests are added)
- [ ] All packages build successfully (`yarn build`)
- [ ] Version numbers are updated
- [ ] CHANGELOG is updated (when added)
- [ ] README files are up to date
- [ ] You're logged into npm (`npm whoami`)
- [ ] Packages are published in correct order
- [ ] Published packages are verified on npmjs.com

## Post-Publishing

After publishing, users can install your packages:

```bash
# Install individual packages
npm install @paintjob/core @paintjob/ui

# Or with yarn
yarn add @paintjob/core @paintjob/ui

# Install CLI globally
npm install -g @paintjob/cli
```

## Automated Publishing (Future Enhancement)

Consider setting up GitHub Actions for automated publishing:

1. Create `.github/workflows/publish.yml`
2. Use npm tokens for authentication
3. Automate version bumps and publishing on release tags

This ensures consistent, error-free publishing.

