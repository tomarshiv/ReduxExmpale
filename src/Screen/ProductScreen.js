import React from "react";
import { Text, View,Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const ProductScreen = () => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 12 }}>
                    <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Redux App</Text>


                </View>
                <View style={{ justifyContent: 'flex-end', marginLeft: 110, backgroundColor: 'lightgreen', width: 51, height: 30, margin: 10, borderRadius: 4 }}>
                    <Icon name='account' style={{ fontSize: 24, }} />
                </View>
            </View>

            <View style={{ backgroundColor: 'red',margin:4}}>
                <Text style={{fontSize: 13,margin:9}}>shoes1</Text>
                <Text style={{fontSize: 18,fontWeight:'bold',margin:4}}>shoes1</Text>
                <View style={{backgroundColor:'green',height:37,width:70,margin:5,borderRadius:6}}>

                </View>
                

               

            </View>



        </>


    )
}
export default ProductScreen;