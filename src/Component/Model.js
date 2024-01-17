import React, { useState } from "react";
import { Text, View, Button, Modal } from "react-native";


const ModalBox = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Modal
                transparent={true}
                visible={showModal}
                animationType='slide'
            >
                <View style={{ backgroundColor: '#fff', padding: 30, margin: 32, borderRadius: 20, elevation: 10 }} >
                    <Text style={{ fontSize: 32 }}>This is Modal</Text>
                    <Button title={"Close modal"} onPress={() => setShowModal(false)} />
                </View>
            </Modal>

            <View style={{ justifyContent: 'flex-end' }}>
                <Button title={"Open modal"} onPress={() => setShowModal(true)} />
            </View>
            <Text>modal</Text>


        </View>
    )
}
export default ModalBox;