import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";



const ListItem=(props)=>{
    const{dt_txt, min, max, condition}=props
    const {item, date, temp}=styles
    return(
        <View style={item}>
            <Feather name="sun" size={50} color="#413543" />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:20,
        marginVertical:8,
         marginHorizontal:16,
         flexDirection:'row',
         justifyContent: 'space-around',
         alignItems:'center',
         borderWidth: 5,
         borderColor: '#FFF8D6',
         borderRadius: 10, 
         borderWidth: 2,  
     },
     date:{
        color:'#A4D0A4',
        fontSize: 15,
    },
    temp:{
        color:'#A4D0A4',
        fontSize:20,
    }, 
})

export default ListItem