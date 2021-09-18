import React, {useState} from 'react';
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
  Modal,
  Pressable,
} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const ExtraProduct = ({estado, setEstado}) => {
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [nombre, setNombre] = useState('');

  const styles = StyleSheet.create({
    containerModal: {
      flex: 1,

      backgroundColor: 'rgba(8,7,7,.8)',

      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      flexDirection: 'column',
      height: 400,
      width: '85%',
      backgroundColor: 'rgba(36,22,50,0.8)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    productoExtra1: {
      width: '95%',
    },
    inputExtra: {
      height: 50,
    },
    canpre: {
      flexDirection: 'row',
      width: '95%',
      margin: 10,
    },
    cantidad: {
      flex: 1,
      marginRight: 5,
    },
    precio: {
      flex: 1,
      marginLeft: 5,
    },
    titulo: {
      fontSize: 30,
      width: '80%',
      textAlign: 'center',
      marginBottom: 25,
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      color: '#FFF',
    },
    botonesModal: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      margin: 10,
      width: '95%',
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderColor: '#FFF',
      borderWidth: 1,
      color: '#FFF',
    },
  });

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={estado}
      onRequestClose={() => {
        setEstado(false);
      }}>
      <View style={styles.containerModal}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Producto Extra</Text>
          <View style={styles.productoExtra1}>
            <FloatingLabelInput
              label="Nombre"
              value={nombre}
              placeholder="Pesos varios"
              staticLabel
              hintTextColor={'#FFF'}
              containerStyles={{
                borderWidth: 1,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(36,22,50,0.4)',
                borderColor: '#FFF',
                borderRadius: 8,
                color: '#FFF',
              }}
              customLabelStyles={{
                colorFocused: '#FFF',
                colorBlurred: '#FFF',
                fontSizeFocused: 12,
                color: '#FFF',
              }}
              labelStyles={{
                backgroundColor: 'rgba(36,22,50,0.9)',
                paddingHorizontal: 5,
                color: '#FFF',
              }}
              inputStyles={{
                color: 'white',
                paddingHorizontal: 10,
              }}
              onChangeText={value => {
                setNombre(value);
              }}
            />
          </View>
          <View style={styles.canpre}>
            <View style={styles.cantidad}>
              <FloatingLabelInput
                label="Cantidad"
                staticLabel
                keyboardType="numeric"
                value={cantidad}
                hintTextColor={'#FFF'}
                containerStyles={{
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  backgroundColor: 'rgba(36,22,50,0.4)',
                  borderColor: '#FFF',
                  borderRadius: 8,
                }}
                customLabelStyles={{
                  colorFocused: '#FFF',
                  colorBlurred: '#FFF',
                  fontSizeFocused: 12,
                }}
                labelStyles={{
                  backgroundColor: 'rgba(36,22,50,0.9)',
                  paddingHorizontal: 5,
                }}
                inputStyles={{
                  color: 'white',
                  paddingHorizontal: 10,
                }}
                onChangeText={value => {
                  setCantidad(value);
                }}
              />
            </View>

            <View style={styles.precio}>
              <FloatingLabelInput
                label="Precio"
                placeholder="Pesos varios"
                staticLabel
                hintTextColor={'#FFF'}
                value={precio}
                maskType="currency"
                currencyDivider="."
                mask="$ 1111"
                keyboardType="numeric"
                containerStyles={{
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  backgroundColor: 'rgba(36,22,50,0.4)',
                  borderColor: '#FFF',
                  borderRadius: 8,
                }}
                customLabelStyles={{
                  colorFocused: '#FFF',
                  colorBlurred: '#FFF',
                  fontSizeFocused: 12,
                  color: '#FFF',
                }}
                labelStyles={{
                  backgroundColor: 'rgba(36,22,50,0.9)',
                  paddingHorizontal: 5,
                }}
                inputStyles={{
                  color: 'white',
                  paddingHorizontal: 10,
                }}
                onChangeText={value => {
                  setPrecio(value);
                }}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.botonesModal}>
              <Text style={{color: '#FFF'}}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonesModal}
              onPress={() => setEstado(false)}>
              <Text style={{color: '#FFF'}}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExtraProduct;
