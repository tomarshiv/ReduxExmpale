import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DynamicRadioButton = () => {
    const [selectRadio, SetSelectRadio] = useState(0)
    user = [
        {
            id: 1,
            name: 'Php',

        },
        {
            id: 2,
            name: 'java',

        },
        {
            id: 3,
            name: 'Native',

        },
        {
            id: 4,
            name: 'React',

        },
    ]






    return (
        <View>
            <View style={style.main}>
                {
                    user.map((item, index) =>
                        <TouchableOpacity key={index} onPress={() => SetSelectRadio(item.id)}>
                            <View style={style.RadioView1}>
                                {selectRadio === item.id ? <View style={style.selectView}></View> : null}
                            </View>
                            <Text style={style.Radio1Text}>{item.name}</Text>
                        </TouchableOpacity>

                    )
                }
            </View>




        </View>
    )

}
const style = StyleSheet.create({
    main: {
        margin: 9,
        // flexDirection: 'row'
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
    {
        width: 26,
        height: 26,
        backgroundColor: 'black',
        borderRadius: 20,
        margin: 1
    }

})
export default DynamicRadioButton;