<div align="center">
  <h2>eslint-config</h2>
</div>

<p align="center">
  <a href="https://npmjs.com/package/@nekohack/eslint-config">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config/latest.svg?style=flat-square">
  </a>
  <!--
  <a href="https://npmjs.com/package/@nekohack/eslint-config">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config/beta.svg?style=flat-square">
  </a>
  -->
  <a href="https://npmjs.com/package/@nekohack/eslint-config">
    <img alt="" src="https://img.shields.io/npm/dt/@nekohack/eslint-config.svg?style=flat-square">
  </a>
  <!-- @nekohack/eslint-config-react -->
  <a href="https://npmjs.com/package/@nekohack/eslint-config-react">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config-react/latest.svg?style=flat-square">
  </a>
  <!--
  <a href="https://npmjs.com/package/@nekohack/eslint-config-react">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config-react/beta.svg?style=flat-square">
  </a>
  -->
  <a href="https://npmjs.com/package/@nekohack/eslint-config-react">
    <img alt="" src="https://img.shields.io/npm/dt/@nekohack/eslint-config-react.svg?style=flat-square">
  </a>
  <!-- @nekohack/eslint-config-vue -->
  <a href="https://npmjs.com/package/@nekohack/eslint-config-vue">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config-vue/latest.svg?style=flat-square">
  </a>
  <a href="https://npmjs.com/package/@nekohack/eslint-config-vue">
    <img alt="" src="https://img.shields.io/npm/v/@nekohack/eslint-config-vue/beta.svg?style=flat-square">
  </a>
  <a href="https://npmjs.com/package/@nekohack/eslint-config-vue">
    <img alt="" src="https://img.shields.io/npm/dt/@nekohack/eslint-config-vue.svg?style=flat-square">
  </a>
</p>

# The nekohack ESLint plugins

The plugin is created, based on the [Lerna](https://github.com/lerna/lerna).

## @nekohack/eslint-config

### Installation

Install the ESLint plugin for ESNext.

```bash
npm i @nekohack/eslint-config -D
yarn add -D @nekohack/eslint-config
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config']
}
```

## @nekohack/eslint-config-react

### Installation

Install the ESLint plugin for [React](https://ja.reactjs.org/).

Dropping support for Node.js `v8.x` - [ESLint v7](https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0)

```bash
npm i @nekohack/eslint-config-react -D
yarn add -D @nekohack/eslint-config-react
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config-react']
}
```

## @nekohack/eslint-config-vue

### Installation

Install the ESLint plugin for [Vue.js](https://jp.vuejs.org/index.html).

Dropping support for Node.js `v8.x` - [ESLint v7](https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0)

```bash
npm i @nekohack/eslint-config-vue -D
yarn add -D @nekohack/eslint-config-vue
```

### Configuration

You can use as general ESLint plugins.

```js
module.exports = {
    extends: ['@nekohack/eslint-config-vue']
}
```
