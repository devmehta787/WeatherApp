import React from "react";
import {View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar} from "react-native";
import {Feather} from "@expo/vector-icons";
import IconText from "../components/IconText";

const City=()=>{
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/bg.jpg')} style={styles.imageLayout}>
            <View style={{ padding: 10 }} />
            <Text style={[styles.city, styles.text]}>Bengaluru</Text>
            <Text style={[styles.country, styles.text]}>India</Text>
            <View style={styles.populationWrapper}>
                <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={styles.populationText}/>
                
                {/* <Feather name={'user'} size={50} color={'red'}/>
                <Text style={styles.populationText}>120000</Text> */}
            </View>

            <View style={styles.riseSetWrapper}>

                <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'06:00:00 AM'} bodyTextStyles={styles.riseSetText}/>
                {/* <Feather name={'sunrise'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>06:00:00 AM</Text> */}
                
                <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:45:00 PM'} bodyTextStyles={styles.riseSetText}/>
                {/* <Feather name={'sunset'} size={50} color={'white'}/>
                <Text style={styles.riseSetText}>17:45:00 PM</Text> */}
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout:{
        flex:1,
    },
    city:{
        fontSize: 40,
    },
    country:{
        fontSize: 30,
    },
    text:{
        textAlign:'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
    populationText:{
        fontSize:25,
        marginLeft:10,
        color:'red',
        fontWeight:'bold',
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:30,
    },
    riseSetText:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})

export default City