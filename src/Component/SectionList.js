import React from "react";
import { View, Text, SectionList } from 'react-native'

const SecList = () => {
    user = [
        {
            id: 1,
            name: 'Anil',
            data: ['php', 'c++', 'CSS']
        },
        {
            id: 2,
            name: 'Anil',
            data: ['node', 'c', 'java']
        },
    ]
    return (
        <View>
            <SectionList
                sections={user}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20 }}>{item}</Text>
                    </View>
                }
                renderSectionHeader={({ section: { name } }) => (
                    <Text>{name}</Text>
                )}
            />
        </View>
    )
}
export default SecList;