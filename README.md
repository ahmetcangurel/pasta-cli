const customComponentContent = (name) => `
import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./${name}.Style";

//Reference for custom component

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

const customComponentStyleContent = `
import { StyleSheet } from "react-native";

//Reference for custom styles

const styles = StyleSheet.create({});

export default styles;
`;

module.exports = {
customComponentContent,
customComponentStyleContent,
};


### 🚚 Install Dependencies

```shell
npm install
```

### 🏃‍♀️ Start the Development Server

To run the app in development mode, use the following commands:

#### 🏁 Start Project :

```shell
npm start
```

#### 🍎 iOS Simulator (requires macOS and Xcode):

```shell
npm run ios
```

#### 🤖 Android Emulator (requires Android Studio):

```shell
npm run android
```

### 🧪 Testing

```shell
npm test
```

### 📖 Documentation

```shell
npm run docs
```