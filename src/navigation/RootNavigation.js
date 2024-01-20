import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'blue'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 21
                    }

                }}>
                <Stack.Screen name="Login" component={Login}

                    options={{
                        headerStyle: {
                            backgroundColor: 'orange'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontSize: 21
                        }

                    }}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
