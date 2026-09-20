import { StyleSheet, useColorScheme, View } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (

      <>
      <StatusBar style="auto" />
        <Stack screenOptions={{
        headerStyle:{backgroundColor:theme.navBackground},
        headerTintColor:theme.title
      }}>
        <Stack.Screen name= '(auth)' options={{headerShown:false}}/>
        <Stack.Screen name='index' options={{title:'Home'}}/>

      </Stack>

      </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})