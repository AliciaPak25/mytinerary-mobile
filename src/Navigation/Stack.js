import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';
import { View, Image } from 'react-native';
import UserButton from '../components/UserButton';
import NavTitle from '../components/NavTitle';

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{ headerBackTitle: "Back" }}
    >
        <Stack.Screen name="MyTinerary" component={NavTitle} options={({ navigation, route }) => ({
            headerTitle: "MyTinerary"
        })} />
            
        <Stack.Screen name="User" component={UserButton} options={({ navigation, route }) => ({
            headerTitle: "User"
        })} />
    </Stack.Navigator>
    );
}