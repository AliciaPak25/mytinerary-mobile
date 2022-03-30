import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 1000
    },
    pepito: {
      backgroundColor: 'red'
    },
    nav:{
      width: '100%',
      height: 100,
      backgroundColor: 'blue',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 25,
      paddingHorizontal: 25,
    },
    tinyLogo: {
      width: 50,
      height: 50
    },
    navButtons: {
      display: 'flex',
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }
  });