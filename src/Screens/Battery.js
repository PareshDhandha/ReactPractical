import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Arrow from "react-native-vector-icons/MaterialIcons";
import { useBatteryLevel } from "expo-battery";

const Battery = ({ navigation }) => {
  const batteryLevel = useBatteryLevel();
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Arrow name="keyboard-arrow-left" size={35} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20,marginTop:23,marginLeft:20,fontWeight:'bold' }}>Battery</Text>
      </View>
      <View style={styles.battery}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          {batteryLevel}
        </Text>
      </View>
    </View>
  );
};

export default Battery;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  back: {
    display: "flex",
    flexDirection: "row",
    marginTop:20,
  },
  battery: {
    marginTop: 40,
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#1fd655",
  },
});
