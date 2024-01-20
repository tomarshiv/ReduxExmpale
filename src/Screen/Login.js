import React from 'react'
import { Text, View,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Login=()=>{
var navigation =useNavigation();

const data=[{
    id:1,
    age:48,
    name:'aman'
}]
    return(
        <View>
        <Text>Login</Text>
        <Button  title='show home' onPress={()=>navigation.navigate('Home',{data})}/>
        </View>
    )
 }
export default Login;
