import { useState } from 'react'
import React from 'react-native'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

const FormData = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [display, setDisplay] = useState('')



    const clearData = () => {
        setDisplay('')
        setName('')
        setAge('')
        setEmail('')
        setMobile('')
    }

    return (

        <>
            <View>

                <TextInput
                    placeholder=' Enter name'
                    style={style.box}
                    onChangeText={(txt) => setName(txt)}

                />

                <TextInput
                    placeholder=' Enter Age'
                    style={style.box}
                    onChangeText={(txt) => setAge(txt)}

                />
                <TextInput
                    placeholder=' Enter Email'
                    style={style.box}
                    onChangeText={(txt) => setEmail(txt)}
                />



                <TextInput
                    placeholder=' Enter Mobile no.'
                    style={style.box}
                    onChangeText={(txt) => setMobile(txt)} />




            </View>
            <View style={{ marginTop: 9, }}>
                <Button title='Show data' onPress={() => setDisplay(true)} />
                <Button title='Show data' onPress={clearData} />
            </View>

            {display ?
                <>
                    <Text>{name}</Text>
                    <Text>{age}</Text>
                    <Text>{email}</Text>
                    <Text>{mobile}</Text>
                </>
                : null

            }
        </>
    )

}

const style = StyleSheet.create({
    box: { margin: 9, borderColor: 'red', borderWidth: 1 }
})
export default FormData;