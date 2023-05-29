import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";

const OurChild = (props) => {
    const {message} = props
    return (
        <SafeAreaView style={styles.wrapper}>
        {/* <View style={{ padding: 10 }} /> */}
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        height:200,
        width: 200,
        backgroundColor:'pink',

    },
    wrapper:{
        paddingTop:10,
    }
})

export default OurChild