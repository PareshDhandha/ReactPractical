import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as dp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../core/themes";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [image, setImage] = useState(null);
  


  const pickImage = async () => {
    const gallaryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(gallaryStatus.granted === false){
      return<Text>No access Internal Storage</Text>
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4.3],
      quality: 1,
    });
    console.log("result", result);

    if (!result.canceled) {
      setImage(result.uri);
    }

    if(hasGallaryPermission === false){
      return <Text>No access Internal Storage</Text>
    }
  };
  return (
    <View style={styles.profile}>
      
      <TouchableOpacity onPress={pickImage}>
        {/* {image && 
        <Image source = {{}} />
        } */}
        <Home name="account" size={hp(14)} style={styles.account} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Home name="camera-outline" size={hp(3)} style={styles.camera} />
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} />}
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
    right: 30,
    top: 50,
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
});
