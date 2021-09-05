import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
function Header() {
  const color = '#0810C5';
  const styles = StyleSheet.create({
    header: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: color,
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      color: '#FFF',

      flexDirection: 'column',
    },

    headerText: {
      fontSize: 60,
      color: 'white',
    },

    headerSellsviewData: {
      flexDirection: 'row',
    },

    welcome: {
      flex: 1,
    },
    welcomeText: {
      fontSize: 35,
    },
    welcomeUser: {
      fontSize: 25,
      marginLeft: 150,
    },
    sells: {
      flexDirection: 'row',
      flex: 1,

      alignItems: 'flex-end',
    },
  });
  return (
    <View style={styles.header}>
      <View style={styles.headerSellsviewData}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}> Bienvenido</Text>
          <Text style={styles.welcomeUser}>Usuario</Text>
        </View>
      </View>
      <View style={styles.sells}>
        <Icon name="dollar" type="font-awesome" color="#FFF" size={25}></Icon>
        <Text style={styles.headerSells}> $121.40</Text>
      </View>
    </View>
  );
}

export default Header;
