import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { Modal, Provider } from "react-native-paper";
import {Popup} from "./Popup";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.dashboard}>
        <Text style={styles.text}>Deshboard</Text>
        <View style={{ display: "flex", flexDirection: "row", marginLeft: hp(10) }}>
          <Home
            name="bell-outline"
            size={24}
            color="#fff"
            style={{ paddingRight: 10 }}
          />
          <Popup />
          </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#875692",
    height: 100,
  },
  text: {
    fontSize: hp(2.6),
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    marginLeft: hp(18),
    color: "#fff",
  },
  dashboard: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginTop: 50,
  },
  menu: {
    position:'absolute',
  },
});
