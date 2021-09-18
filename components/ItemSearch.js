import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const ItemSearch = () => {
  const colorItem = '#21293C';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 90,
      backgroundColor: colorItem,
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 15,
      borderWidth: 1,
      borderColor: '#FFF',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Icon
        name="image"
        type="font-awesome"
        color="#FFF"
        size={50}
        style={{margin: 18}}></Icon>
      <Text style={{color: '#FFF', margin: 8}}>Nombre del producto</Text>
      <Text style={{color: '#FFF', margin: 8}}>$123.32</Text>
    </View>
  );
};

export default ItemSearch;
