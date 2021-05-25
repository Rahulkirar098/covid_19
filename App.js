/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';


const App = () => {

  const api = `https://api.covid19india.org/data.json`;
    const [getdata, setGetdata] = useState([])

    useEffect(async (index) => {
        const fetchapi = await fetch(api);
        const response =  await fetchapi.json();
        setGetdata(response.statewise)
    },[1])

  return (

    <>
    <Text style={{fontSize:25,color:'black'}}>State,
   Active,Deaths,
Confirmed</Text>
    <FlatList 
    data={getdata}
    keyExtractor={({id},index) => id }
    renderItem={({item}) =>{
      return (
        <>
        <Text key={item}>{item.state},
        {item.active},
        {item.deaths},
        {item.confirmed}</Text>
        </>
      )
    }
      
  }
    />
    </>

  );
};


export default App;
