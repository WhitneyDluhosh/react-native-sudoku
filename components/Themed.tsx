/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 * https://dev.to/viniciusmdias/how-to-create-a-theme-in-react-typescript-with-styled-components-3fn
 */

import { Text as DefaultText, View as DefaultView, TouchableOpacity as DefaultButton } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ButtonThemeProps ={
  lightColor?: string;
  darkColor?: string;
  title?:string;
  onPress(): void;
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ButtonThemeProps & DefaultButton['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function HomeButton(props: ButtonProps) {
  const { style, lightColor, darkColor, onPress, title, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (<DefaultButton style={[{ backgroundColor }, style]} onPress={onPress} {...otherProps}><Text>{title}</Text></DefaultButton>);
}