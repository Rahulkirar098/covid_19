/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import CovidData from "./Components/Screens/CovidData";
import Splash from "./Components/Screens/Splash";



const App = () => {

  return (

    // <View style={styles.body}>

    //   <View>

    //     <View style={styles.header}>
    //       <Text style={styles.heading}>Covid 19 Current Status</Text>
    //     </View>
    //     <CovidData />
    //   </View>

    //   <Text style={styles.heading}>Every Day Featching A New Data</Text>
    //   <Text style={styles.heading}>Application By Rahul Kirar</Text>
    // </View>
    <Splash />

  );
};

const styles = StyleSheet.create({

  header: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green'
  },

})


export default App;
