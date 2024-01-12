import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Grid = () => {
    data = [
        {
            id: 1,
            name: 'Ram'
        },
        {
            id: 2,
            name: 'Ram'
        },
        {
            id: 3,
            name: 'Ram'
        },
        {
            id: 4,
            name: 'Ram'
        },
        {
            id: 5,
            name: 'Ram'
        },
    ]




    return (
        <View>

            <Text>Dymanamic Grid</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.map((item) =>
                    <Text style={style.item}>{item.name}</Text>)


                }
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    item: { fontSize: 14, backgroundColor: 'red', width: 55, margin: 5, height: 50, borderRadius: 4, textAlign: 'center', padding: 10 }
})
export default Grid