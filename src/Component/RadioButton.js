import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadioButton = () => {
    const [selectRadio, SetSelectRadio] = useState(0)
    return (
        <View>
            <View style={style.main}>
                <TouchableOpacity onPress={() => SetSelectRadio(1)}>
                    <View style={style.RadioView1}>
                        {selectRadio === 1 ? <View style={style.selectView}></View> : null}
                    </View>
                </TouchableOpacity>
                <Text style={style.Radio1Text}>RadioButton1</Text>
            </View>

            <View style={style.main}>
                <TouchableOpacity onPress={() => SetSelectRadio(2)}>
                    <View style={style.RadioView1}>
                        {selectRadio === 2 ? <View style={style.selectView}></View> : null}
                    </View>
                </TouchableOpacity>
                <Text style={style.Radio1Text}>RadioButton2</Text>
            </View>


        </View>
    )

}
const style = StyleSheet.create({
    main: {
        margin: 9,
        flexDirection: 'row'
    },
    RadioView1: {
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray'
    },
    Radio1Text:
    {
        fontSize: 16,
        margin: 5
    },
    selectView: 
    {  width: 26, 
       height: 26,
       backgroundColor: 'black',
       borderRadius: 20,
       margin: 1 
    }

})
export default RadioButton;