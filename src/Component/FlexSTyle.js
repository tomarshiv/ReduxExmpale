import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

const style = () => {
    return (
        <View>
        <View style={{ backgroundColor:'green',height:'100%',flexDirection:'row'}}>
        <View style={{backgroundColor:'red',height:'20%',width:'40%',flexDirection:'row',justifyContent:'space-around'}}>
            <Text>shivani</Text>
            <Text>shivani</Text>
           
        </View>
        <View style={{backgroundColor:'blue',height:'20%',width:'30%',flexDirection:'row',justifyContent:'space-around'}}>
        <Text style={{color:'#fff'}}>Ani</Text>
        <Text style={{color:'#fff'}}>Ani</Text>
        </View>
        <View style={{backgroundColor:'skyblue',height:'20%',width:'30%'}}></View>
  
         
        </View>
      
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'green'
    }

})





export default style;