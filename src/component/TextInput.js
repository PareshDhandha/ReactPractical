import {
  StyleSheet,
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../core/themes";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import SeletBox from "./SeletBox";

const TextInput = () => {
  const [email, setEmail] = useState({value:'',email:''});
  const [password, setPassword] = useState({value:'',password:''});

  const submit = () => {
    Alert.alert(email , password)
  }
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 13 }}>
        <Text style={{ fontSize: hp(2), marginBottom: 10, fontWeight: "bold" }}>
          Email
        </Text>
        <Input
          style={styles.input}
          value={email}
          returnKeyType="next"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
      </View>
      <View>
        <Text style={{ fontSize: hp(2), marginBottom: 10, fontWeight  : "bold" }}>
          Password
        </Text>
        <Input
          style={styles.input}
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={{ paddingVertical: 13 }}>
        <Text style={{ fontSize: hp(2), marginBottom: 10, fontWeight: "bold" }}>
          Gender
        </Text>
        <SeletBox />
      </View>
      <View style={{ paddingVertical: 5 }}>
        <DatePicker />
      </View>
      <View style={{ paddingVertical: 13 }}>
        <TimePicker />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={submit}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 24,
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.onSurfaceDisabled,
  },
  button: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: theme.colors.onSurfaceDisabled,
    borderColor: theme.colors.onSurfaceDisabled,
    marginVertical: hp(5),
  },
});
