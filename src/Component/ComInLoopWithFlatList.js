import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const FList = () => {



    data = [
        {
            id: 1,
            email: 'ss@gamil.com',
            name: 'Russhi'
        },
        {
            id: 2,
            email: 'kk@gamil.com',
            name: 'sushi'
        },

        {
            id: 3,
            email: 'kpk@gamil.com',
            name: 'sushi'
        },
    ]
    return (

        <View>
            <Text>Component In Loop with FlatList</Text>

            <FlatList
                data={data}
                renderItem={({ item }) => <UserData item={item} />}
            />
        </View>


    )
}
const UserData = ({ item }) => {
    console.log('###', item)
    return (
        <View style={style.box}>
            <Text style={style.item}>{item.name}</Text>
            <Text style={style.item}>{item.email}</Text>

        </View>
    )
}







const style = StyleSheet.create({
    item: {
        fontSize: 18,
        flex: 1,

        textAlign: 'center'



    },
    box: {
        backgroundColor: 'red',
        borderColor: 'green',
        borderWidth: 1,
        padding: 7,
        flexDirection: 'row',
        marginBottom: 10

    }
})
export default FList;