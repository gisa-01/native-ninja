import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.jpg';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image}/>
      <Text style={styles.title}>Number 1</Text>
      <Spacer height={10}/>
      <Text>Reading List App</Text>
      <Spacer />
        <Link href='/about' style={styles.link}>About Page</Link>
         <Link href='/contact' style={styles.link}>Contact Page</Link>
    </ThemedView>
  )
}

export default index

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
  image: {
    marginVertical: 20,
    height:100,
    width:100
  },
  link: {
    marginVertical:10,
    borderBottomWidth:1
  }
})