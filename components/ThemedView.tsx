import {
  View,
  useColorScheme,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from '../constants/Colors';

type ThemedProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const ThemedView = ({ style, children }: ThemedProps) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark'
    ? Colors.dark
    : Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemedView;