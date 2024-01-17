import React, { useState } from "react";
import { View, Text, ActivityIndicator, Button } from 'react-native'

const Loder = () => {
    const [show,setShow] = useState(false)

    const display = () => {
        setShow(true)
    }

    setTimeout(() => {
    setShow(false)

    }, 5000);


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 9 }}>
            
            <ActivityIndicator size={100} color={'red'} animating={show} />
            <Button title="submit" onPress={display} />
            {
                show ? <ActivityIndicator size={100} color={'blue'} animating={show} />:null
            }
        </View>
    )
}
export default Loder;