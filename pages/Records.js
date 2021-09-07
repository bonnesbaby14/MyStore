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
import Item from '../components/Item';

const Records = () => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';
  const colorInput = '#535865';

  const colorStatus = '#7226dd';
  NavigationBar.setColor('#29064e');

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
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Records;
