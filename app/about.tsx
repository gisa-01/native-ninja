import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
const About  = () => {

   const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <Text style={[styles.title]}>About Page</Text>

      <Link style={styles.link} href='/'>Home page</Link>
    </View>
  )
}

export default About 

const styles = StyleSheet.create({
   container: {
    flex:1,
    alignItems:'center', 
    justifyContent:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18
  },
  link: {
    marginVertical:10,
    borderBottomWidth:1
  }
})