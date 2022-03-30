import { StatusBar } from 'expo-status-bar';
import {Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import {styles} from './src/styles/styles';
import HomeScreen from './src/screens/HomeScreen';
import AppBar from './src/components/Header';
import { NativeBaseProvider} from "native-base";

export default function App() {
  return (
    
    <NativeBaseProvider>

    <ScrollView style={{height: '100%', width: '100%'}}>
      <AppBar/>
      {/* <StatusBar style="auto" backgroundColor='#ffad5e' />
      <View style={styles.nav}>
        <TouchableOpacity
        activeOpacity={0.6}
        underlayColor="lightBlue"
        onPress={() => alert('Soy la imagen!')}
        >
        <Image
          style={styles.tinyLogo}
          source={require('./assets/favicon.png')}
        />
        </TouchableOpacity>
        <View style={styles.navButtons}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Soy Home!')}
          >
          <Text style={{color: 'white'}}>Home</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="black"
            onPress={() => alert('Soy Cities!')}
          >
            <Text style={{color: 'white'}}>Cities</Text>
          </TouchableHighlight>
        </View>
      </View>
      <HomeScreen/>
    <View style={styles.container}>
      <Text>Esta es mi primera aplicación con react native!</Text>
    </View>
    <View style={styles.pepito}>
    <Text>Soy la parte inferior</Text>
    </View> */}
    </ScrollView>
    
    </NativeBaseProvider>

  );
}


