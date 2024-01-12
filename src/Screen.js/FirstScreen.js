import React from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import Styles from '../Styles/FirstScreenCss'

const FirstScreen = () => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 12 }}>hello</Text>
            <Text style={styles.box}>hello</Text>
            {/* <Text style={[Styles.box,styles.box,{marginBottom:32}]}>hello</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        fontSize: 31,
        color: 'black'
    }

})


export default FirstScreen;