import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touchable,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Item = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#444C5F',
      borderRadius: 5,
      height: 70,
    },
    descripcion: {flex: 3, justifyContent: 'center', alignContent: 'center'},
    image: {flex: 1, justifyContent: 'center', alignContent: 'center'},
    many: {
      flex: 1.3,

      justifyContent: 'center',
      alignContent: 'center',
    },
    addItem: {
      flexDirection: 'row',
    },
    input: {
      flex: 1,
      backgroundColor: '#282E3D',
      height: '80%',
      borderWidth: 1,
      borderColor: '#444C5F',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center',
    },
    boton: {flex: 1, justifyContent: 'center', margin: 1},
  });

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Icon name="image" type="font-awesome" color="#FFF" size={50}></Icon>
      </View>
      <View style={styles.descripcion}>
        <Text>Descripcion del producto</Text>
      </View>
      <View style={styles.many}>
        <View style={styles.addItem}>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => {
              // navigation.goBack(null);
            }}>
            <Icon
              name="minus"
              type="font-awesome"
              color="#FFF"
              size={15}></Icon>
          </TouchableOpacity>
          <View style={styles.input}>
            <TextInput
              keyboardType="numeric"
              value={1}
              placeholder={'1'}></TextInput>
          </View>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => {
              // navigation.goBack(null);
            }}>
            <Icon name="plus" type="font-awesome" color="#FFF" size={15}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Item;
