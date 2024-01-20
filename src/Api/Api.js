import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const Api = () => {
    const [data, setData] = useState()
    console.log('Data', data)

    const getData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1"
        let result = await fetch(url)
        result = await result.json()
        setData(result)
        console.log('Result', result)

    }
    useEffect(() => {
        getData()
    }, [])


    return (


        <View>
            <Text>data</Text>
            {data ?
                <View>
                    <Text style={{ fontSize: 20 }}>USERID: {data.userId}</Text>
                    <Text style={{ fontSize: 20 }}>ID: {data.id}</Text>
                    <Text style={{ fontSize: 20 }}>TITLE: {data.title}</Text>
                    <Text style={{ fontSize: 20 }}>BODY: {data.body}</Text>

                </View>

                : null
            }

        </View>
    )
}
export default Api