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

const Scanner = ({estado, setEstado}) => {
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
        <View style={styles.content}></View>
      </View>
    </Modal>
  );
};

export default Scanner;
