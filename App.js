import React from "react";
import { NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/Drawer';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
      {/* 
        <ScrollView style={{height: '100%', width: '100%'}}>
          <AppBar/>
        </ScrollView> */}


