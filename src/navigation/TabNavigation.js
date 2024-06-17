import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import Account from "../Screens/Account";
import DeviceInformation from "../Screens/DeviceInformation";
import Home from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#875692",tabBarHideOnKeyboard: true }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="DeviceInformation"
          component={DeviceInformation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home
                name="devices"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Home name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
