import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import GlobalStack from '../GloablStack'

const Navigator = () => {
    return (
        <NavigationContainer>
            <GlobalStack />
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})