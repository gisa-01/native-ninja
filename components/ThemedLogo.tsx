import {
  Image,
  useColorScheme,
  StyleProp,
  ImageStyle
} from 'react-native';
import { Colors } from '../constants/Colors';

import DarkLogo from '../assets/img/logo_dark.jpg';
import LightLogo from '../assets/img/logo_light.jpg';

type ThemedProps = {
  
  style?: StyleProp<ImageStyle>;
};

const ThemedLogo = ({ style }: ThemedProps) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === 'dark'
    ? DarkLogo
    : LightLogo;

  return (
    <Image source = {logo} style={style}/>
  );
};

export default ThemedLogo;
