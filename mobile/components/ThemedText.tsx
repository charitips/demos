import {
  Color,
  ColorLevel,
  TextType,
  WeightType,
  theme,
  weights,
} from '../helpers/theme';
import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  size?: TextType;
  weight?: WeightType;
  color?: Color;
  colorLevel?: ColorLevel;
};

export function ThemedText({
  style,
  size = 'textSM',
  weight = 'regular',
  color = 'grey',
  colorLevel = '_900',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        { color: theme.colors[color][colorLevel] },
        styles[size],
        { fontFamily: 'Inter', fontWeight: weights[weight] },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  display2XL: {
    fontSize: 72,
    lineHeight: 90,
  },
  displayXL: {
    fontSize: 60,
    lineHeight: 72,
  },
  displayLG: {
    fontSize: 48,
    lineHeight: 60,
  },
  displayMD: {
    fontSize: 36,
    lineHeight: 44,
  },
  displaySM: {
    fontSize: 30,
    lineHeight: 38,
  },
  displayXS: {
    fontSize: 24,
    lineHeight: 32,
  },
  textXL: {
    fontSize: 20,
    lineHeight: 30,
  },
  textLG: {
    fontSize: 18,
    lineHeight: 28,
  },
  textMD: {
    fontSize: 16,
    lineHeight: 24,
  },
  textSM: {
    fontSize: 14,
    lineHeight: 20,
  },
  textXS: {
    fontSize: 12,
    lineHeight: 18,
  },
});
