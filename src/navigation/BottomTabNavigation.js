import Raect from 'react'
import {View,Text} from 'react-native'
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab =createBottomTabNavigator()

const BottomTab=()=>{
    return(
      <NavigationContainer>
     <Tab.Navigator>
     <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
     </Tab.Navigator>
      </NavigationContainer>
    )
}
export default BottomTab;