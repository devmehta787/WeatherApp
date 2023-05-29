import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from "react-native";
import {Feather} from "@expo/vector-icons";

const CurrentWeather = () => {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={{padding:10}}/>
        <View style={styles.container}>
          <Feather name="sun" size={100} color="black" />
            {/* <Text>Current Weather</Text> */}
            <Text style={styles.temperature}>25</Text>
            <Text style={styles.feels}>Feels like _____</Text>
            <View style={styles.highlowWrapper}>
              <Text style={styles.highlow}>High: __ </Text>
              <Text style={styles.highlow}>Low: __</Text>
            </View>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
      </SafeAreaView>
        
    )
}


const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'pink',
  },
  container:{
    backgroundColor:'pink',
    alignItems:'center',
  },
  temperature:{
    color:'black',
    fontSize:50,
  },
  feels:{
    color:'black',
    fontSize:40,  
  },
  highlow:{
    color:'black',
    fontSize:30,
  },
  highlowWrapper:{
    flexDirection:'row',
  },

  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    position: 'absolute',
    bottom: 0,
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }


  
})
export default CurrentWeather;