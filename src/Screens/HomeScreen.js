import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../component/Header";
import Home from "react-native-vector-icons/MaterialCommunityIcons";
import Call from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <Text
          style={{
            fontSize: hp(2.3),
            margin: 20,
            fontWeight: "bold",
            color: "#3E2F84",
          }}
        >
          Upcoming Consultations
        </Text>
        <View style={styles.card}>
          <View style={{ padding: 5 }}>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              Dr.Marta Juarez
            </Text>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              Dr.Hans Gerhoff
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: wp(4),
              top: hp(9),
            }}
          >
            <Home
              name="stethoscope"
              size={wp(16)}
              color="#875692"
              style={{ margin: hp(1 ) }}
            />
            <Text
              style={{ fontSize: hp(8.2), color: "#875692", fontWeight: "bold" }}
            >
              2
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: hp(2.3),
            margin: 20,
            fontWeight: "bold",
            color: "#3E2F84",
          }}
        >
          Medical Files
        </Text>
        <View style={styles.card}>
          <View style={{ padding: 5 }}>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              Blood tests.pdf
            </Text>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              Cardiology results.pdf
            </Text>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              Blood tests 20-02-2020.pdf
            </Text>
            <Text style={{ fontSize: wp(4.2), color: "#875692" }}>
              MRI results.pdf
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: wp(4),
              top: hp(9),
            }}
          >
            <Home
              name="file-document-multiple"
              size={wp(15)}
              color="#875692"
              style={{ margin: wp(1) }}
            />
            <Text
              style={{ fontSize: hp(8.2), color: "#875692", fontWeight: "bold" }}
            >
              7
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          padding: 20,
        }}
      >
        <View style={styles.box}>
          <View
            style={{
              width: wp(16.4),
              height: hp(8),
              alignSelf: "center",
              backgroundColor: "#875692",
              borderRadius: 50,
              marginTop:40,
            }}
          >
          <Home
            name="plus-outline"
            size={hp(6)}
            color="#fff"
            style={
              {
                margin:9
              }
            }
          />
          <Text style={{ fontSize: hp(2), fontWeight: "bold", marginTop: 8,color:'#875692' }}>
            Schedule
          </Text>
          </View>
        </View>
        <View style={styles.box}>
        <View
            style={{
              width: wp(16.2),
              height: hp(8),
              alignSelf: "center",
              backgroundColor: "#875692",
              borderRadius: 75,
              marginTop:40,
            }}
          >
          <Call
            name="call"
            size={hp(4.4)}
            color="#fff"
            style={{
              margin:15,
            }}
          />
          <Text
            style={{
              fontSize: hp(2),
              fontWeight: "bold",
              marginTop: 7,
              marginLeft: 17,
              color:'#875692'
            }}
          >
            Call
          </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  card: {
    padding: 20,
    // borderTopWidth: 0.3,
    marginLeft: 20,
    marginRight: 20,
    height: hp(20),
    borderRadius: 10,
    shadowColor: "black",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  box: {
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: wp(42),
    height: hp(22),
    borderRadius: 10,
  },
});
