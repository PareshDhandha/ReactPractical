import { StyleSheet, Text, View ,Pressable,TextInput,Platform} from 'react-native'
import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { theme } from '../core/themes';
import Icon from "react-native-vector-icons/Fontisto"

const DatePicker = () => {
    const [date , setDate] = useState(new Date())
  const [showPicker , setShowPicker] = useState(false);
  const [dateOfBirth , setDateOfBirth] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  }

  const onChange = ({type}, selectDate) =>{
    if(type == "set"){
      const currentDate = selectDate;
      setDate(currentDate);

      if(Platform.OS === "android"){
        toggleDatePicker();
        setDateOfBirth(currentDate.toDateString());
      }
    }else {
      toggleDatePicker();
    }
  }
  return (
    <View>
        <Text style = {{fontSize: hp(2),marginBottom:10,fontWeight:'bold'}}>Date Of Birth</Text>
      {showPicker && (
        <DateTimePicker 
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}/>
        )}
        <Pressable onPress = {toggleDatePicker}>
        <TextInput 
        style = {styles.input}
        placeholder = "Sat jun 15 2024"
        value = {dateOfBirth}
        onChangeText = {setDateOfBirth}
        editable = {false}
        />
        </Pressable>
        <Icon name='date' size={22} color= '#000'style = {styles.icon}/>
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        padding:8,
        borderRadius:24,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.onSurfaceDisabled
    },
    icon: {
      position:'absolute',
      right:20,
      top:42
    }
})