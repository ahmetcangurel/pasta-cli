const reactNativeComponentContent = (name) => `
import React, { FC } from "react";
import { View, Text } from "react-native";

// Styles
import styles from "./${name}.Style";
import {useTheme} from '../../../theme/ThemeProvider';

type ${name}Props = {};

const ${name}: FC<${name}Props> = ({}) => {
    const {colors} = useTheme();
    const Style = styles();
    const {t} = useTranslation();

    return (
        <View style={Style.container}>
            <Text>${name}</Text>
        </View>
     );
    };

export default ${name};
`;

const reactNativeComponentStyleContent = `
import {StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/ThemeProvider';

const styles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container:{},
  });
};

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
