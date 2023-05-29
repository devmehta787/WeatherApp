import React from 'react'
import {View, StyleSheet} from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import OurChild from './src/components/OurChild'
import City from './src/screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather/> */}
      {/* <UpcomingWeather/> */}
      {/* <OurChild message={'Hello from Parent'}/>
      <OurChild message={"Hello"}/>
      <OurChild message={"dev"}/> */}
      <City/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App