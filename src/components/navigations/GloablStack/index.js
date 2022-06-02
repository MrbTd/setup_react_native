import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StackAuthentification from '../StackAuthentification'
import StackHome from '../StackHome'

const GlobalStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StackAuthentification" component={StackAuthentification} />
            <Stack.Screen name="StackHome" component={StackHome} />
        </Stack.Navigator>
    )
}

export default GlobalStack

const styles = StyleSheet.create({})