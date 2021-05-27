import React, { useEffect, useState } from 'react'
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';



const CovidData = () => {

    const api = `https://api.covid19india.org/data.json`;

    const [getdata, setGetdata] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(async (index) => {

        const fetchapi = await fetch(api);
        const response = await fetchapi.json();

        setGetdata(response.statewise)
        setLoader(false)

    }, [1])

    const Datarender = ({ item }) => {
        return (
            <View style={styles.main}>

                <Text style={styles.title}>
                    {item.state},
                </Text>

                <View style={styles.flex}>

                    <Text style={styles.text}>
                        {item.active},
                    </Text>

                    <Text style={styles.text}>
                        {item.deaths},
                    </Text>

                    <Text style={styles.text}>
                        {item.confirmed}
                    </Text>

                </View>

            </View>
        )
    }

    return (


        loader ?
            <View>
                < ActivityIndicator size="large" color="black" />
            </View > :

            <View style={styles.mainTitle}>

                <View style={styles.main}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black',textAlign: 'center' }}>
                        State,
                </Text>
                    <View style={styles.flex}>

                        <Text style={{ color: 'black', fontSize: 20 }}>
                            Active,
                     </Text>

                        <Text style={{ color: 'black', fontSize: 20 }}>
                            Deaths,
                      </Text>

                        <Text style={{ color: 'black', fontSize: 20 }}>
                            Confirmed
                    </Text>

                    </View>

                </View>
                <FlatList
                    style={styles.bg}
                    data={getdata}
                    keyExtractor={({ id }, index) => index}
                    renderItem={Datarender}
                />
            </View>

    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'black',
        paddingTop: 20
    },
    main: {
        paddingLeft: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        paddingBottom: 20,
        color: 'white',
        textAlign: 'center',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    text: {
        fontSize: 20,
        color: 'white'

    },
})

export default CovidData

