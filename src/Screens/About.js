import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Arrow from "react-native-vector-icons/MaterialIcons";
import * as Device from "expo-device";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 10 }}>About</Text>
      </View>
      <View style = {{marginVertical:30}}>
        <View style={styles.info}>
          <Text style = {styles.text}>App Version</Text>
          <Text>1.0.0</Text>
        </View>
        <View style={styles.info}>
          <Text style = {styles.text}>Storage</Text>
          <Text>{Device.totalMemory}</Text>
        </View>
        <View style={styles.info}>
          <Text style = {styles.text}>Build Version</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  back: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:15
  },
  text: {
    fontSize:16,
    fontWeight:'bold'
  }
});
