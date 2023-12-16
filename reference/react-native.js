const reactNativeComponentContent = (name) => `
import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./${name}.Style";

type ${name}Props = {};

const ${name}: FC<${name}Props> = ({}) => {
    return (
        <View>
            <Text>${name}</Text>
        </View>
     );
    };

export default ${name};
`;

const reactNativeComponentStyleContent = `
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({});

export default styles;
`;

const reactNativeIndexContent = (name) => `
export { default } from "./${name}";
`;

module.exports = {
  reactNativeComponentContent,
  reactNativeComponentStyleContent,
  reactNativeIndexContent,
};
