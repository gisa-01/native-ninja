import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';

import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useState } from 'react';



const login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    console.log('login form submited', email,password)
  }
  return (
   <ThemedView style={styles.container}>

    <Spacer/>

    <ThemedText title={true} style={styles.title}> 
      Login to Your Account
    </ThemedText>

    <ThemedTextInput
      style={{width:'80%', marginBottom: 20 }}
      placeholder='Email'
      keyboardType='email-address'
      onChangeText={setEmail}
      value={email}

    />

    <ThemedTextInput
      style={{width:'80%', marginBottom: 20 }}
      placeholder='Password'
      onChangeText={setPassword}
      value={password}
      secureTextEntry

    />

    <ThemedButton onPress={handleSubmit}>
      <Text style={{color:'#f2f2f2'}}>Login</Text>
    </ThemedButton>

    <Spacer height={100}/>

    <Link href='/register'>
      <ThemedText style={{textAlign:'center'}}>Register instead</ThemedText>
    </Link>

   </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    textAlign:'center',
    fontSize:18,
    marginBottom:30
  },
 
})