import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/LoginScreen'

const StackAuthentification = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default StackAuthentification

const styles = StyleSheet.create({})