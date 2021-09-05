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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from 'react-native-navbar-color';
import {Icon} from 'react-native-elements';
const NewSale = ({navigation}) => {
  const colorclaro = '#20045e';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    topbar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    back: {
      alignItems: 'flex-start',
    },
  });

  return (
    <SafeAreaView style={{backgroundColor: colorclaro, flex: 1}}>
      <StatusBar backgroundColor={colorclaro} />
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

export default NewSale;
