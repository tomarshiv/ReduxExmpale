import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Toggle = () => {

    const [show, setShow] = useState(false)

    return (
        <View>
            <Text>Toggle component</Text>
            <Button title='hide component' onPress={() => setShow(false)} />
            <Button title='show component' onPress={() => setShow(true)} />
            <Button title=' component' onPress={() => setShow(!show)} />
            {
                show === true ? <UserData /> : null
            }

        </View>

    )
}

const UserData = () => {
    return (
        <View>
            <Text style={{ fontSize: 32, color: 'green' }}>userData</Text>
        </View>
    )
}
export default Toggle;