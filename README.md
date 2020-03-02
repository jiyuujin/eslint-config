# The nekohack ESLint plugins

The plugin is created, based on the [Lerna](https://github.com/lerna/lerna).

## Confirm

```bash
yarn workspaces info
```

### Root `package.json`

#### Set `private: true`

#### Set `workspaces` object
1. Target directories in `packages` property
2. Common packages are in `nohoist` property

## Add a plugin

```bash
yarn workspace @nekohack/eslint-config-vue add eslint-plugin-vue
```
