const reactNativeComponentContent = (name) => `
import React from "react";
import { View, Text } from "react-native";
import {useTranslation} from 'react-i18next';

// Styles
import styles from "./${name}.Style";
import {useTheme} from '../../../theme/ThemeProvider';

// Components

const ${name} = ({}) => {
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
import {horizontalScale, verticalScale, moderateScale} from '../../../theme/metrics';

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
