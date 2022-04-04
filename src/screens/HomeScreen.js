import React from 'react';
import {View, Text,  Button, ImageBackground, Image} from 'react-native';
import {HomeStyles} from '../styles/HomeStyles';
import {styles} from '../styles/styles';

const HomeScreen = ({navigation}) => {

    return(
        <View style={HomeStyles.hero}>
            <ImageBackground source={require('../../assets/chicamirandoalanada.jpg')} resizeMode="cover" style={HomeStyles.image}>
                <Image source={require('../../assets/logo.png')} alt='logo' style={styles.tinyLogo}/>
                <Text>MyTinerary</Text>
                <Button 
                onPress={() => navigation.navigate('Cities')}
                title="Go to Cities"
            />
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;
