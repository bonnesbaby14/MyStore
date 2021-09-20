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

const Scanner = ({estado, setEstado}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
      backgroundColor: 'gold',
      flex: 4,
      width: '100%',
    },

    preview: {
      backgroundColor: 'green',
      flex: 2,
      width: '100%',
    },

    botones: {
      backgroundColor: 'blue',
      flex: 1,
      width: '100%',
      flexDirection: 'row',
    },

    add: {
      flex: 1,
      backgroundColor: 'purple',
    },

    accept: {flex: 1, backgroundColor: 'orange'},
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
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={{flex: 1, width: '100%'}}
              />
            )}
          </View>
          <View style={styles.preview}></View>
          <View style={styles.botones}>
            <View style={styles.add}></View>
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
