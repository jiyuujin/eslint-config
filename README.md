# The nekohack ESLint plugins

The plugin is created, based on the [Lerna](https://github.com/lerna/lerna).

## Getting started

Deal with individual packages.

```bash
npx lerna init --independent
```

## Confirm

Use `yarn` workspaces.

```bash
yarn workspaces info
```

Set `private: true`, `workspaces` object in the `package.json`.

1. Target directories in `packages` property
2. Common packages are in `nohoist` property

### Add a plugin

```bash
yarn workspace @nekohack/eslint-config-vue add eslint-plugin-vue
```
