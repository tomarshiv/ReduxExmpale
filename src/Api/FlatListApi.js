import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

const ListApi = () => {
    const [data, setData] = useState()

    const GetData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url)
        result = await result.json()
        setData(result)

    }




    useEffect(() => {
        GetData()
    }, [])



    return (
        <View>

            {
                data ?

                    <View>
                        {/* <Text>data</Text>
                        <Text>{data.title}</Text>
                        <Text>{data.id}</Text>
                        <Text>{data.userId}</Text>
                        <Text>{data.body}</Text> */}
                        <FlatList
                            data={data}
                            renderItem={({ item }) => {
                                <View>
                                    <Text>{item.title}</Text>
                                    <Text>{item.id}</Text>
                                    <Text>{item.userId}</Text>
                                    <Text>{item.body}</Text>
                                </View>
                            }} />
                    </View> : null
            }

        </View>
    )
}
export default ListApi;