import {
  View,
  useColorScheme,
  StyleProp,
  ViewStyle,
  StyleSheet
} from 'react-native';
import { Colors } from '../constants/Colors';

type ThemedProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const ThemedCard = ({ style, children }: ThemedProps) => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark'
    ? Colors.dark
    : Colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.uiBackground,
        }, styles.card,
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card:{
    borderRadius:5,
    padding: 20
  }
})