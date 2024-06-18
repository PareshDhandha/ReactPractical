import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../core/themes";
import Icon from "react-native-vector-icons/Entypo";

const TimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState();

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectDate) => {
    if (type == "set") {
      const currentDate = selectDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setTime(currentDate.toLocaleTimeString());
      }
    } else {
      toggleDatePicker();
    }
  };
  
  return (
    <View>
      <Text style={{ fontSize: hp(2), marginBottom: 10, fontWeight: "bold" }}>
        Time
      </Text>
      {showPicker && (
        <DateTimePicker
          mode="time"
          // display="spinner"
          value={date}
          onChange={onChange}
        />
      )}
      <Pressable onPress={toggleDatePicker}>
        <TextInput
          style={styles.input}
          placeholder="0:0 "
          value={time}
          onChangeText={setTime}
          editable={false}
        />
      </Pressable>
      <Icon name="back-in-time" size={27} style={styles.icon} />
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 24,
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.onSurfaceDisabled,
  },
  icon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
