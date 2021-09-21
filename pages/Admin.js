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
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar-color';
import {Icon} from 'react-native-elements';

const Admin = ({navigation}) => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';
  const colorInput = '#535865';

  const colorStatus = '#7226dd';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
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
      flex: 12,
      backgroundColor: colorFondo,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      alignItems: 'center',
      width: '95%',
      flexDirection: 'row',
    },
    option: {
      flex: 1,
      backgroundColor: colorBTN,
      margin: 10,
      textAlign: 'center',
      justifyContent: 'center',

      height: '80%',
      borderTopLeftRadius: 30,
      borderBottomRightRadius: 30,

      borderTopRightRadius: 10,
      borderWidth: 1,
      borderColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
    },
  });

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
          <TouchableOpacity style={styles.option}>
            <Text style={{transform: [{rotate: '-90deg'}]}}>
              Lista de productos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={{transform: [{rotate: '-90deg'}]}}>
              Registrar productos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={{transform: [{rotate: '-90deg'}]}}>Estadisticas</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Admin;
