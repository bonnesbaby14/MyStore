import {StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import Header from '../components/Header';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

// import imageHeader from "../assets/header";

const Home = () => {
  const colorBTN = '#1B202F';
  const colorFondo = '#1A1F2B';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      flexDirection: 'column',
      backgroundColor: colorFondo,

      justifyContent: 'center',
    },

    rowOne: {
      flex: 3,
      backgroundColor: 'red',
      flexDirection: 'row',
    },
    sale: {
      flex: 2,

      backgroundColor: colorFondo,

      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    saleBtn: {
      borderLeftWidth: 10,
      borderColor: '#0810C5',

      margin: 10,
      backgroundColor: colorBTN,
      width: '85%',
      height: '60%',
      borderRadius: 10,
      justifyContent: 'center',
      alignContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
    },
    btnNewSale: {
      borderRadius: 6,
      flexDirection: 'row',
    },
    btnAdmin: {
      borderRadius: 6,
      flexDirection: 'column',
      color: '#FFF',
    },
    btnAdminIcon: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    btnAdminText: {
      flex: 2,
      alignContent: 'center',
      justifyContent: 'center',
    },
    btnNewSaleIcon: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
    btnNewSaleText: {
      flex: 2,
      alignContent: 'center',
      justifyContent: 'center',
    },
    sales: {
      flex: 1,
      backgroundColor: colorFondo,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    salesBtn: {
      borderBottomWidth: 10,
      borderColor: '#0810C5',
      margin: 10,
      backgroundColor: colorBTN,
      width: '80%',
      height: '85%',
      borderRadius: 10,
      justifyContent: 'center',
      alignContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    admin: {
      flex: 1,
      backgroundColor: colorFondo,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  });

  return (
    <SafeAreaView style={{backgroundColor: colorFondo, flex: 1}}>
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.sale}>
          <TouchableOpacity
            style={styles.saleBtn}
            onPress={() => {
              alert('Nueva venta');
            }}>
            <View style={styles.btnNewSale}>
              <View style={styles.btnNewSaleIcon}>
                <Icon
                  name="shopping-cart"
                  type="font-awesome"
                  color="#FFF"
                  size={80}></Icon>
              </View>

              <View style={styles.btnNewSaleText}>
                <Text
                  style={{textAlign: 'center', fontSize: 25, color: '#FFF'}}>
                  Nueva venta
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.rowOne}>
          <View style={styles.sales}>
            <TouchableOpacity
              style={styles.salesBtn}
              onPress={() => {
                alert('ss');
              }}>
              <View>
                <View>
                  <Icon
                    name="history"
                    type="font-awesome"
                    color="#FFF"
                    size={80}></Icon>
                </View>
                <View>
                  <Text
                    style={{textAlign: 'center', fontSize: 25, color: '#FFF'}}>
                    Historial
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.admin}>
            <TouchableOpacity
              style={styles.salesBtn}
              onPress={() => {
                alert('ss');
              }}>
              <View style={styles.btnAdmin}>
                <View>
                  <Icon
                    name="tasks"
                    type="font-awesome"
                    color="#FFF"
                    size={80}></Icon>
                </View>
                <View>
                  <Text
                    style={{textAlign: 'center', fontSize: 25, color: '#FFF'}}>
                    Administar
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
