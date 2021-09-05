import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerSellsview}>
        <View style={styles.headerSellsviewData}>
          <Icon name="dollar" type="font-awesome" color="#FFF" size={25}></Icon>
          <Text style={styles.headerSells}> $121.40</Text>
        </View>
      </View>
      <View>
        <Text style={styles.headerText}>MyStore</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 100,
    backgroundColor: "#0810C5",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "column",
  },

  headerText: {
    fontSize: 60,
    color: "white",
  },
  headerSellsview: {
    flexDirection: "row",
  },
  headerSellsviewData: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerSells: {
    fontSize: 20,
    color: "white",
  },
});

export default Header;
