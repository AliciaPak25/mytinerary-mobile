import { Button } from 'native-base';
import React, { useEffect, useLayoutEffect } from 'react';
import {View, Image, Text} from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/styles';

function DetailScreen(props) {
    const [itinerary, setItinerary] = useState()
    const {id} = props.route.params 

    useEffect(() => {
        props.getOneItinerary(id)
            .then(response => setItinerary(response.data.response.itinerary))
    }, [id])

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => props.navigation.navigate('Comments')}
                title= "Comments"
                />
            ),
        });
    },[])

    return (
        <>
            <View style={styles.container}>
                {/* <Image source={{ uri: place?.image }}/> style={styles.image} */}
                <Text></Text>
            </View>
        </>
    );
}

/* const mapDispatchToProps = {
    getOneItinerary: itinerariesActions.getOneItinerary
}

export default connect(null, mapDispatchToProps)(DetailScreen); */