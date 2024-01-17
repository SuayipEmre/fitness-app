import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          headerShown : false,
        }}
        name="Launch" component={LaunchScreen} />

        <Stack.Screen
         options={{
          headerShown : false,
        }}
        name='Home'
        component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

