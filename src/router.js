import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LaunchScreen from './screens/LaunchScreen'
import HomeScreen from './screens/HomeScreen'
import ExercisesScreen from './screens/ExercisesScreen'

const Stack = createNativeStackNavigator()


export const Router = () => {
  
    const navigation = useNavigation()
    return (
    
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
         <Stack.Screen
         options={{
            headerShown : false,
          }}
        name='Exercises'
        component={ExercisesScreen}
        />
      </Stack.Navigator>
    )
  }
  