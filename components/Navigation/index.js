import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../../screen/Login'
import HomeScreen from '../../screen/Home'

const { Navigator, Screen } = createStackNavigator()

const HomeNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1A2035' }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='login' component={LoginScreen} />
        <Screen name='home' component={HomeScreen} />
      </Navigator>
    </SafeAreaView>
  )
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
