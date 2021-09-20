import React, {useState, useEffect} from 'react';
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
  Alert,
  Pressable,
} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {BarCodeScanner} from 'expo-barcode-scanner';
import ItemSearch from './ItemSearch';
import {Icon} from 'react-native-elements';

const Scanner = ({estado, setEstado}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const colorItem = '#21293C';

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    Alert.alert(
      'Alert Title',
      `Bar code with type ${type} and data ${data} has been scanned!`, // <- this part is optional, you can pass an empty string
      [{text: 'OK', onPress: () => setScanned(false)}],
      {cancelable: false},
    );
  };

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
      height: 600,
      width: '85%',
      backgroundColor: 'rgba(36,22,50,0.8)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    camera: {
      flex: 4,
      width: '100%',
      justifyContent: 'center',
    },

    preview: {
      flexDirection: 'row',
      flex: 2,
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },

    botones: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
    },

    add: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },

    accept: {flex: 1, justifyContent: 'center', flexDirection: 'row'},
    botonesModal: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      margin: 10,
      flex: 1,
      width: '90%',
      height: 45,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderColor: '#FFF',
      borderWidth: 1,
      color: '#FFF',
    },
    containerPreview: {
      flex: 1,
      height: 120,
      backgroundColor: 'rgba(36,22,50,.5)',
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 0,
      //   borderWidth: 1,
      //   borderColor: 'rgba(255,255,255,.5)',
      justifyContent: 'space-between',
      alignItems: 'center',
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
          <View style={styles.camera}>
            {hasPermission === null ? (
              <Text>Requesting for camera permission</Text>
            ) : hasPermission === false ? (
              <Text>No access to camera</Text>
            ) : (
              <BarCodeScanner
                BarCodeSize={{width: 10, height: 50}}
                onTouchEndCapture={false}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{
                  height: '90%',
                  width: '100%',
                }}
              />
            )}
          </View>
          <View style={styles.preview}>
            <View style={styles.containerPreview}>
              <Icon
                name="image"
                type="font-awesome"
                color="#FFF"
                size={50}
                style={{margin: 18}}></Icon>
              <Text style={{color: '#FFF', margin: 8}}>
                Nombre del producto
              </Text>
              <Text style={{color: '#FFF', margin: 8}}>$123.32</Text>
            </View>
          </View>
          <View style={styles.botones}>
            <View style={styles.add}>
              <TouchableOpacity
                style={styles.botonesModal}
                onPress={() => setEstado(false)}>
                <Text style={{color: '#FFF'}}>Agregar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accept}>
              <TouchableOpacity
                style={styles.botonesModal}
                onPress={() => setEstado(false)}>
                <Text style={{color: '#FFF'}}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Scanner;
