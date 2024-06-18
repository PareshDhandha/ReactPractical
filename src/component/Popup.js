import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import Setting from "react-native-vector-icons/AntDesign";

export const Popup = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ position: "absolute" }}
      >
        <Home name="dots-vertical" size={24} color="#fff" />
      </TouchableOpacity>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView
          style={styles.centeredView}
          onTouchStart={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Settings</Text>
              <Setting
                name="setting"
                size={24}
                color="#000"
                style={{ margin: 20 }}
              />
            </View>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Logout</Text>
              <Home
                name="logout"
                size={24}
                color="#000"
                style={{ margin: 20 }}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export const ProfileModal = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: 220,
    marginTop: 10,
    position: "absolute",
    right: -10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    margin: 20,
  },
  modal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
