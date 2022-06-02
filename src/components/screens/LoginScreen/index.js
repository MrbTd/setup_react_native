import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>LoginScreen</Text>
            <TouchableOpacity style={{ padding: "10%", width: 100, backgroundColor: "blue", alignItems: "center" }}
                onPress={() => navigation.navigate("StackHome")}
            >
                <Text >cliq</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})