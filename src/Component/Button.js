import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Button = ({ bColor, Radius, margin, height, width, title, Align, Size, onPress = () => { } }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={{ backgroundColor: bColor, borderRadius: Radius, margin: margin, height: height, width: width }}>
                <Text style={{ textAlign: Align, fontSize: Size }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
onPress = () => { }
Button.defaultProps = {

    bColor: 'green',
    Radius: 80,
    margin: 6,
    height: 30,
    width: '80%',
    title: 'submit',
    Align: 'center',
    Size: 20,
    onPress: { onPress }

}



export default Button;