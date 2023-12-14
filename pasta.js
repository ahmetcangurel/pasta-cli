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
