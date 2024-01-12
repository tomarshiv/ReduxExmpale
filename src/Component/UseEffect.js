import React, { useEffect, useState } from "react";
import { View, Text, Button } from 'react-native'

const Effect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

        console.log(count)


    // useEffect(() => {
    //     console.log('hello')
    // }, [])





    return (
        <View>

            <Button title=" count submit" onPress={() => setCount(count + 1)} />
            <Button title=" data submit"  onPress={() => setData(data + 1)} />

            {/* <Text> Apply UseEffect function = {count}</Text> */}
            <UserData info={{data,count}}/>
        </View>
    )
}

const UserData=(props)=>{



    useEffect(()=>{
        console.log('khushboo')

    }, [props.info.data])
    console.log('##',props)
    return(
        <View>
             <Text> Apply UseEffect  count:{props.info.count} </Text>
             <Text> Apply UseEffect data :{props.info.data}  </Text>
        </View>
    )
}

export default Effect;