import React from 'react';
import {View, Text,  Button} from 'react-native';
import {HomeStyles} from '../styles/HomeStyles';

const HomeScreen = ({navigation}) => {

    return(
        <View style={HomeStyles.hello}>
            <Text> HOME SCREEN</Text>
            <Button 
                onPress={() => navigation.navigate('Cities')}
                title="Go to Cities"
            />
        </View>
    );
}

export default HomeScreen;