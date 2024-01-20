import React from "react";
import { Text, View, Button } from 'react-native'
import RootNavigation from "./src/navigation/RootNavigation";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";
import TopTabNavigation from "./src/navigation/TopTabNavigation";
import MainScreen from "./src/Screen/mainScreen";


const App = () => {
    return (
         <MainScreen/>
     )
}

export default App