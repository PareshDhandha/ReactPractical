import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { theme } from "../core/themes";

const SeletBox = () => {
  const [selectedGender, setSelectedGender] = useState();
  return (
    <View style={styles.box}>
      <View>
        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue) => setSelectedGender(itemValue)}
          style={{ height: 45 }}
        >
          <Picker.Item label="Male" value="Male" style={{ fontSize: 14 }} />
          <Picker.Item label="Female" value="Female" style={{ fontSize: 14 }} />
        </Picker>
      </View>
    </View>
  );
};

export default SeletBox;

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderRadius: 24,
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.onSurfaceDisabled,
  },
});
