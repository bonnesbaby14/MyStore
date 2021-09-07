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

const Records = ({navigation}) => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';
  const colorInput = '#535865';

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
      flex: 12,
      backgroundColor: colorFondo,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      flexDirection: 'column',
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
        <View style={styles.datos}></View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Records;
