import { StatusBar } from 'expo-status-bar';
import {Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {styles} from './src/styles/styles';
import HomeScreen from './src/screens/HomeScreen';
import AppBar from './src/components/Header';
import { NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/Drawer';


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
      {/* 
        <ScrollView style={{height: '100%', width: '100%'}}>
          <AppBar/>
        </ScrollView> */}
      
    </NativeBaseProvider>
  );
}


