import {
  View,
  useColorScheme,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Colors } from '../constants/Colors';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemedProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  safe?: boolean;
};

const ThemedView = ({ style, safe=false, children }: ThemedProps) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark'
    ? Colors.dark
    : Colors.light;

  if (!safe) return (
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

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        },
        style,
      ]}
    >
      {children}
      </View>
  );
  
};

export default ThemedView;