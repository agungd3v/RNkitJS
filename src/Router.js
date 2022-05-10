import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ScreenOne, ScreenTwo } from './screens'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='ScreenOne'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='ScreenOne' component={ScreenOne} />
      <Stack.Screen name='ScreenTwo' component={ScreenTwo} />
    </Stack.Navigator>
  )
}

const Router = () => {
  return(
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default Router