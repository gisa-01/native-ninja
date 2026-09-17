import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/img/logo_light.jpg'

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image}/>
      <Text style={styles.title}>Number 1</Text>
      <Text style={{marginTop:10, marginBottom: 30}}>
        Reading List App
      </Text>
    </View>
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

})