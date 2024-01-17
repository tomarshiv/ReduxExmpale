import React from "react";
import { Text,View ,StyleSheet, Pressable} from "react-native";

const PressCom=()=>{
    return(
        <Pressable
        //   onPress={console.log('shivani')}
        //   onLongPress={console.log('shivani Long')}
        //   onPressIn={console.log('shivani in')}
        //   onPressOut={console.log('shivani out')}
          >
        <View>
            <Text style={style.pressBox}>Submit</Text>
        </View>
        </Pressable>
    )
}
const style= StyleSheet.create({
    pressBox:{
        fontSize:21,
        margin:6,
        backgroundColor:'blue',
        shadowColor:'red',
        borderRadius:5,
        padding:2,
        color:'#fff',
        textAlign:'center'

        

    }
})
export default PressCom;