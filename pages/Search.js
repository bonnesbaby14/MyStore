import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar-color';
import {Icon} from 'react-native-elements';

import {FloatingLabelInput} from 'react-native-floating-label-input';
import ItemSearch from '../components/ItemSearch';

const Search = ({navigation}) => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';
  const colorInput = '#535865';
  const colorStatus = '#7226dd';

  const [search, setsearch] = useState('');

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
      alignItems: 'center',
    },
    busqueda: {
      width: '90%',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderRadius: 15,
      marginTop: 25,
      borderColor: '#FFF',
      borderWidth: 1,
    },
    lista: {
      width: '90%',
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
          <View style={styles.busqueda}>
            <TextInput
              style={{flex: 8}}
              placeholder="    Buscar..."></TextInput>
            <Icon
              style={{flex: 2, margin: 10}}
              name="search"
              type="font-awesome"
              color="#FFF"
              size={20}></Icon>
          </View>
          <View style={styles.lista}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Search;
