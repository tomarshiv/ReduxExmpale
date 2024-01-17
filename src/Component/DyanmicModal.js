import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import Button from "./Button";

const DynamicModal = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={{flex:1}}>
        <View style={{flex:1,justifyContent:'flex-end'}}>
            <Button/>
        </View>

            {/* <Button title={'open model'} onPress={() => setShow(true)} />
            {
                show ? <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'orange', width: '80%', margin: 5, borderRadius: 20, padding: 32 }}>
                        <Text style={{ fontSize: 30 }}>Modal</Text>
                        <Button title={"close Modal"} bColor={'#fff'} onPress={() => setShow(false)} />
                    </View>
                </View> : null
            } */}
        </View>
    )
}
export default DynamicModal;