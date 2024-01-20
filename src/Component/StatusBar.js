import React, { useState } from 'react'
import { Text, View, StatusBar } from 'react-native'
import Button from './Button';

const TopBar = () => {
    const [hide,SetHide] = useState(false)
    const [barStyle,setBarStyle]=useState('light-content')
    return (
        <View>
            <StatusBar
                backgroundColor='red'
                barStyle={barStyle}
                hidden={hide}
            />
            <Text>TopBar</Text>
            <Button title={'show TopBar'} onPress={() =>SetHide(!hide)} />
            <Button title={'hide TopBar'} onPress={() => setBarStyle('dark-content')} />
        </View>
    )
}
export default TopBar;
