import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, StatusBar, Image} from "react-native";
import {Feather} from "@expo/vector-icons";
import ListItem from "../components/ListItem";

const DATA = [
    {
        dt_txt: "2023-05-28 18:00:00",
        main:{
            temp_max: 25,
            temp_min: 20,
        },
        weather:[
            {main:'Clear'}
        ]
    },
    { 
        dt_txt: "2023-05-28 18:00:00",
        main:{
            temp_max: 25,
            temp_min: 20,
        },
        weather:[
            {main:'Clouds'}
        ]
    },
    {
        dt_txt: "2023-05-28 18:00:00",
        main:{
            temp_max: 25,
            temp_min: 20,
        },
        weather:[
            {main:'Rain'}
        ]
    },
]


// const Item=(props)=>{
//     const{dt_txt, min, max, condition}=props
//     return(
//         <View style={styles.item}>
//             <Feather name="sun" size={50} color="#413543" />
//             <Text style={styles.date}>{dt_txt}</Text>
//             <Text style={styles.temp}>{min}</Text>
//             <Text style={styles.temp}>{max}</Text>
//         </View>
//     )
// }


const UpcomingWeather = () => {
    const renderItem=({item})=>(
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
    const {container, image}=styles
    return(
        <SafeAreaView style={styles.container}>
            {/* <View styles={styles.container}> */}
                <View style={{padding:10}}/>
                {/* <Feather name="sun" size={50} color="black" /> */}
                <Text>Upcoming Weather</Text>
                <Image source={require('../../assets/favicon.png')} style={styles.image}/>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'#617A55',
    },
    image:{
        width: 100,
        height: 100,

    }
})

export default UpcomingWeather;