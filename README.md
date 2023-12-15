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
npx pasta-cli --name button
```

### 🎯 Props

| Name       | Type                   | Description                                                                                        |
| :--------- | :--------------------- | :------------------------------------------------------------------------------------------------- |
| `--name`   | string                 | Gets the component name (required)                                                                 |
| `--type`   | `react`,`react-native` | It can take the values "react" or "react-native". (Default: 'react-native')                        |
| `--dir`    | etc: `src/components`  | Specifies where to render the component. (Default: project root dir)                               |
| `--custom` | `boolean`              | To use a custom template (note: if this prop is used, there is no need to give the `--type` value) |

#### 🍎 If you want to use a custom template

##### Create your pasta.js file in the root

**_Note:_** _You just need to change the content_

```shell
//pasta.js

export const customComponentContent = (name) => `
    import React, { FC } from "react";
    import { View, Text } from "react-native";
    import styles from "./${name}.Style";

    type ${name}Props = {};

    const ${name}: FC<${name}Props> = ({}) => {
    return (
    <View>
    <Text>${name} namel</Text>
    </View>
    );
  };

export default ${name};
`;

export const customComponentStyleContent = `
    import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({});

    export default styles;
`;
```

### 💎 Example usage

```shell
npx pasta-cli --name button --dir src/components --type react-native
```

```
This command will create a component named "button" under "src/components" folders for "react-native".
-src/
  -components/
    -Button/
      -Button.tsx
      -Button.Style.ts
```

## 📄 License

Pasta is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/ahmetcangurel/pasta/blob/main/LICENSE
