import React from "react";
import { Text,View } from "react-native";

const ListMap=()=>{

user=[
    {
        id:1,
        name:'aman'
    },
     {
        id:2,
        name:'aman'
    },
]


    return(
        <View>
        <Text style={{fontStyle:32}}>List with map function</Text>
        {
            user.map((item)=><Text>{item.name}</Text>)
        }
        </View>
    )
}
export default ListMap;