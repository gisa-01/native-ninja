import {
  StyleProp,
  TextInput,
  TextInputProps,
  useColorScheme,
  ViewStyle,
} from 'react-native';

import { Colors } from '../constants/Colors';

type InputProps = TextInputProps & {
  style?: StyleProp<ViewStyle>;
};

const ThemedTextInput = ({ style, ...props }: InputProps) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark'
    ? Colors.dark
    : Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;