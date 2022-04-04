import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/user/SignInScreen';
import SignUpScreen from '../screens/user/SignUpScreen';
import UserScreen from '../screens/user/UserScreen';

const Tab = createBottomTabNavigator();
export default function Tabs() {

    return (
        <Tab.Navigator initialRouteName='UserAccount'
            screenOptions={{
                'tabBarActiveTintColor': "#FFF",
                'tabBarInactiveTintColor': "#d3d3d3",
                'tabBarActiveBackgroundColor': "#14253d",
                'tabBarInactiveBackgroundColor': "#11101D",
            }}
        >
            <Tab.Screen name='SignUp' component={SignUpScreen}
                options={{
                    title: "Sign Up",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-add" size={size} color={color}/>
                    )
                }}
            />
                
            <Tab.Screen name='LogIn' component={SignInScreen}
                options={{
                    title: "Log In",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name='ios-person' size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen name='SignOut' component={UserScreen}
                options={{
                    title: "Exit",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="log-out" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
