import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import TextInput from "../component/TextInput";
import Profile from "../component/Profile";

const Account = () => {
  const [email, setEmail] = useState({ value: "", email: "" });
  const [password, setPassword] = useState({ password: "", value: "" });
  
  
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View>
        <Profile />
      </View>
      <View>
        <TextInput />
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
});
