import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Checkbox as Check } from "expo-checkbox";

const CheckBox = () => {
    const [isChecked , setIsChecked] = useState(false);
  return (
    <View style = {styles.section}>
      <Check
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={{ fontSize: 16, padding: 5 }}>Term & Conditions</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
    padding: 7,
  },
  section: {
    flexDirection:'row',
    marginVertical: 8,
    paddingHorizontal: 20
  },
});
