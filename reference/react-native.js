const reactNativeComponentContent = (convertedName) => `
import React, { FC } from "react";
import { View, Text } from "react-native";
import styles from "./${convertedName}.Style";

type ${convertedName}Props = {};

const ${convertedName}: FC<${convertedName}Props> = ({}) => {
    return (
        <View>
            <Text>${convertedName}</Text>
        </View>
     );
    };

export default ${convertedName};
`;

const reactNativeComponentStyleContent = `
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({});

export default styles;
`;

module.exports = {
  reactNativeComponentContent,
  reactNativeComponentStyleContent,
};
