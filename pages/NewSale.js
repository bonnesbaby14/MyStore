import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar-color';
import {Icon} from 'react-native-elements';

const NewSale = ({navigation}) => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';

  const colorStatus = '#7226dd';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    topbar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    back: {
      alignItems: 'center',
      marginLeft: 10,
    },
    datos: {
      flex: 10,
      backgroundColor: colorFondo,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      flexDirection: 'column',
    },
    botones: {
      margin: 20,
      marginBottom: 0,
      flexDirection: 'row',
    },
    botones2: {
      margin: 20,
      marginTop: 0,
      flexDirection: 'row',
    },
    boton: {
      backgroundColor: colorBTN,
      borderRadius: 5,
      margin: 10,
      flex: 1,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });
  NavigationBar.setColor(colorFondo);
  return (
    <SafeAreaView style={{backgroundColor: colorclaro, flex: 1}}>
      <StatusBar backgroundColor={colorStatus} />
      <LinearGradient
        colors={['#7226dd', '#2c0979', '#29064e']}
        style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack(null);
            }}>
            <Icon
              name="angle-left"
              type="font-awesome"
              color="#FFF"
              size={50}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.datos}>
          <View style={styles.botones}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                //navigation.goBack(null);
              }}>
              <Icon
                name="barcode"
                type="font-awesome"
                color="#FFF"
                size={40}></Icon>
              <Text>Escaner</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                // navigation.goBack(null);
              }}>
              <Icon
                name="search"
                type="font-awesome"
                color="#FFF"
                size={35}></Icon>
              <Text>Buscar producto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botones2}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                //navigation.goBack(null);
              }}>
              <Icon
                name="edit"
                type="font-awesome"
                color="#FFF"
                size={40}></Icon>
              <Text>Producto Extra </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default NewSale;
