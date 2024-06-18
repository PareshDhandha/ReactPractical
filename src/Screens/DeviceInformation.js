import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Arrow from "react-native-vector-icons/MaterialIcons";
import Battery from "react-native-vector-icons/Entypo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DeviceInformation = () => {
  const navigation = useNavigation();
  // const appVersion = pkg.version;
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
          style={styles.about}
        >
          <Battery name="mobile" size={hp(3)} style={styles.icon1} />
          <Text style={{ fontSize: hp(2.2), marginLeft: 30, marginTop: 5 }}>
            About Phone
          </Text>
          <Arrow name="arrow-forward-ios" size={hp(2.2)} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Battery")}
          style={styles.about}
        >
          <Battery name="battery" size={hp(3)} style={styles.icon} />
          <Text style={{ fontSize: hp(2.2), marginLeft: 30, marginTop: 5 }}>
            Battery
          </Text>
          <Arrow name="arrow-forward-ios" size={hp(2.2)} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      {/* <View><Text>Version{appVersion}</Text></View> */}
    </View>
  );
};

export default DeviceInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  about: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    position: "absolute",
    right: 0,
    top: 11,
  },
  icon1: {
    color: "#fff",
    backgroundColor: "#1E90FF",
    padding: 5,
    borderRadius: 8,
  },
  icon: {
    color: "#fff",
    backgroundColor: "#1fd655",
    padding: 5,
    borderRadius: 8,
  },
});
