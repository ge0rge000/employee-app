import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Contants from 'expo-constants'
import {Home} from "./screens/Home"
import CreateEmployee from './screens/createEmployee';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const myOptions={
  title:"My sweet home",
  headertintcolor:"white",
  headerStyle:{
    backgroundColor:"#b3195e"
  }
}
 function App()
 {  
  return (
    <View style={styles.container}>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}
        options={
          myOptions
         }
         />
        <Stack.Screen name="create" component={CreateEmployee}
        options={
          {...myOptions,title:"Create Employee"}
         } />
        <Stack.Screen name="Profile" component={Profile}
        
        options={
          {...myOptions,title:"Profile"}
         }
        />

      </Stack.Navigator>
       
    </View>
  );
}
export default ()=>{
  return( 
  <NavigationContainer>
    <App/>
  </NavigationContainer>
  )
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4dbd0',
    marginTop:Contants.statusBarHeight,
    
  },
});
