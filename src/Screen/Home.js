import React from 'react'
import { Text,View } from 'react-native'

const Home=(props)=>{
    console.log('###',props.route.params)
    return(
        <View>
            <Text>Home</Text>
            {/* <Text> Nam: {props.route.params.name}</Text> */}
            {/* <Text> Age: {props.route.params.age}</Text> */}
        </View>
    )
}
export default Home;
