import React from 'react'
import { View, Text, FlatList } from 'react-native'

const List = () => {
    DATA = [
        {
            id: 1,
            name: 'Aman',
            add: 'gwalior'

        },
        {
            id: 2,
            name: 'suman',
            add: 'morena'

        },
        {
            id: 3,
            name: 'raman',
            add: 'guna'

        }
    ]



    // const Item = ({name}) => (
    //     <View >
    //       <Text>{name}</Text>
    //     </View>
    //   );


    return (
        <FlatList
        data={DATA}
        renderItem={({item}) =><Item title={item.name} />}
        keyExtractor={item => item.id}
      />
          
          
      
    )
}
export default List;