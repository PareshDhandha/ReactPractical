import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as dp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../core/themes";
import * as ImagePicker from "expo-image-picker";
import User from "./assets/user.png";

const Profile = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const gallaryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (gallaryStatus.granted === false) {
      return <Text>No access Internal Storage</Text>;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4.3],
      quality: 1,
    });
    console.log("result", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("uri..", result.assets[0].uri);
    }
  };
  const takePicture = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted === false) {
      alert("permission denied");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();

    console.log("result..", result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("uri", result.assets[0].uri);
      photo(image);
    }
  };
  return (
    <View style={styles.profile}>
      <TouchableOpacity onPress={pickImage}>
        <Image source={image ? { uri: image } : User} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => takePicture()}>
        <Home name="camera-outline" size={hp(3)} style={styles.camera} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    position: "relative",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    color: "#fff",
    right: 35,
    top: 45,
  },
  account: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderRadius: 70,
    marginTop: 30,
    padding: 15,
    color: "#fff",
    backgroundColor: theme.colors.onSurfaceDisabled,
  },
  image: {
    width: dp(40),
    height: hp(20),
    borderRadius: 75,
    marginLeft: 40,
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  
});
