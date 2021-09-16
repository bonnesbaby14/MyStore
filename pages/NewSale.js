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
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar-color';
import {Icon} from 'react-native-elements';
import Item from '../components/Item';
import {Input} from 'react-native-elements/dist/input/Input';
import {TextInput} from 'react-native-paper';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const NewSale = ({navigation}) => {
  const colorclaro = '#20045e';
  const colorFondo = '#1A1F2B';
  const colorBTN = '#1f2844';
  const colorInput = '#535865';
  const colorStatus = '#7226dd';

  const [modal, setmodal] = useState(false);

  const handleExtra = () => {
    setmodal(true);
  };

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
    botones: {
      margin: 20,
      marginBottom: 0,
      flexDirection: 'row',
    },
    botones2: {
      margin: 20,
      marginTop: 0,
      flexDirection: 'row',
      marginBottom: 0,
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
    ventas: {
      flex: 11,
      margin: 30,
      marginTop: 10,
    },
    total: {
      margin: 30,
      marginBottom: 1,
      marginTop: 1,

      flexDirection: 'column',
    },
    subTotal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    botones3: {
      margin: 20,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
    },
    botones4: {
      margin: 20,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
    },
    input: {
      backgroundColor: colorInput,
      borderRadius: 5,
      margin: 10,
      flex: 1,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    containerModal: {
      flex: 1,
      backgroundColor: 'rgba(8,7,7,.8)',

      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      flexDirection: 'column',
      flex: 0.7,

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
    },
    cantidad: {
      flex: 1,
    },
    precio: {
      flex: 1,
    },
    titulo: {
      fontSize: 30,
      width: '80%',
      textAlign: 'center',
      marginBottom: 25,
      borderBottomColor: 'white',
      borderBottomWidth: 2,
    },
  });
  NavigationBar.setColor(colorFondo);

  return (
    <SafeAreaView style={{backgroundColor: colorclaro, flex: 1}}>
      <StatusBar backgroundColor={colorStatus} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setmodal(false);
        }}>
        <View style={styles.containerModal}>
          <View style={styles.content}>
            <Text style={styles.titulo}>Producto Extra</Text>
            <View style={styles.productoExtra1}>
              <FloatingLabelInput
                label="Phone"
                staticLabel
                hintTextColor={'#FFF'}
                containerStyles={{
                  borderWidth: 2,
                  paddingHorizontal: 10,
                  backgroundColor: '#fff',
                  borderColor: 'gold',
                  borderRadius: 8,
                }}
                customLabelStyles={{
                  colorFocused: '#FFF',
                  fontSizeFocused: 12,
                }}
                labelStyles={{
                  backgroundColor: '#FFF',
                  paddingHorizontal: 5,
                }}
                inputStyles={{
                  color: 'white',
                  paddingHorizontal: 10,
                }}
                onChangeText={value => {}}
              />
            </View>
            <View style={styles.canpre}>
              <View style={styles.cantidad}>
                <TextInput
                  style={styles.inputExtra}
                  label="Cantidad"
                  mode="outlined"
                  placeholder="1.00"
                />
              </View>

              <View style={styles.precio}>
                <TextInput
                  style={styles.inputExtra}
                  label="Precio"
                  mode="outlined"
                  placeholder="1.00"
                />
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setmodal(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
            <TouchableOpacity style={styles.boton} onPress={handleExtra}>
              <Icon
                name="edit"
                type="font-awesome"
                color="#FFF"
                size={40}></Icon>
              <Text>Producto Extra </Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.ventas}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </ScrollView>
          <View style={styles.total}>
            <View style={styles.subTotal}>
              <Text>SubTotal:</Text>
              <Text>$0.00</Text>
            </View>
            <View style={styles.subTotal}>
              <Text>Total:</Text>
              <Text>$0.00</Text>
            </View>
          </View>
          <View style={styles.botones4}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="123.09"
              value={122.0}></TextInput>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                // navigation.goBack(null);
              }}>
              <Icon
                name="hourglass-start"
                type="font-awesome"
                color="#FFF"
                size={25}></Icon>
              <Text>Venta Pendiente</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.botones3}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => {
                //navigation.goBack(null);
              }}>
              <Icon
                name="check"
                type="font-awesome"
                color="#FFF"
                size={40}></Icon>
              <Text>Finalizar venta </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default NewSale;
