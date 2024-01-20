import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../Screen/Login';
import Home from '../Screen/Home';
import SignUp from '../Screen/SignUp';


const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="SignUp" component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default MyTabs;