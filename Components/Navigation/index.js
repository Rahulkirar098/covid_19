import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { CovidData, Splash } from "../Screens";


const Stack = createStackNavigator();


export const Navigation = () => {
    return (
        <>
            <StatusBar backgroundColor="steelblue" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="splash" headerMode="none">
                    <Stack.Screen name="splash" component={Splash} />
                    <Stack.Screen name="covid" component={CovidData} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}



const styles = StyleSheet.create({

    header: {
        width: '100%',
        paddingTop: 40,
        paddingBottom: 40,
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green'
    },

})