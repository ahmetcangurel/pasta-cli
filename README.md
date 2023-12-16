<h1 align="center">
    Pasta-Cli
</h1>
<p align="center">
  <strong>Create your components and screens with single command</strong><br>
 For React & React Native
</p>

<p align="center">
  <a href="https://github.com/ahmetcangurel/pasta/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Pasta is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/pasta-cli">
    <img src="https://img.shields.io/npm/v/pasta-cli?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=cangureltxt">
    <img src="https://img.shields.io/twitter/follow/reactnative.svg?label=Follow%20@cangureltxt" alt="Follow @cangureltxt" />
  </a>
</p>

### 🚚 No installation required, npx available

```shell
npx pasta-cli --name my-component
```

### 🎯 Props

| Name     | Type                   | Description                                                                 |
| :------- | :--------------------- | :-------------------------------------------------------------------------- |
| `--name` | string (rqeuired)      | If you separate the name with a `-` sign, you will get Pascal case output.  |
| `--type` | `react`,`react-native` | It can take the values "react" or "react-native". (Default: 'react-native') |
| `--dir`  | etc: `src/components`  | Specifies where to render the component. (Default: project root dir)        |

### 💎 Example usage

This command will create a component named "button" under "src/components" folders for "react-native".

```shell
npx pasta-cli --name my-component --dir src/components --type react-native
```

```
-src/
  -components/
    -MyComponent/
      -MyComponent.tsx
      -MyComponent.Style.ts
```

## 📄 License

Pasta is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/ahmetcangurel/pasta/blob/main/LICENSE
