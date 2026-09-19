import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.jpg';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.image}/>
      <Text style={styles.title}>Number 1</Text>
      <Text style={{marginTop:10, marginBottom: 30}}>
        Reading List App
      </Text>
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