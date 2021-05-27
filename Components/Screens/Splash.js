import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

export default Splash = () => {
    return (
        <>
            <View style={styles.home}>
                <Image source={require('../Assets/icon.png')} />
                <Text style={styles.text}>Covide 19</Text>
            </View>
            <View style={styles.subtext}>
                <Text style={{fontSize:30,color:'#ffffff'}}>By Rahul kirar</Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: 'steelblue'
    },
    text: {
        fontSize: 50,
        color: '#ffffff',
    },
    subtext:{
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
    }
})


