import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

const IconText=(props)=>{
    const{iconName, iconColor, bodyText, bodyTextStyles}=props
    return(
        <View style={styles.container}>
            <Feather name="sun" size={50} color="#413543" />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
    },
    
    TextTheme:{
        fontWeight:'bold',
    }
})

export default IconText