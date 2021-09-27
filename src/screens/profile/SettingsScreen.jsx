import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";
const SettingsScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Settings</Text>
      </View>

      <View style={styles.viewBtns}>
        {/* ********************************************************************** */}
        {/* ******************************** Notifications************************* */}
        {/* ********************************************************************** */}

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Notifications</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>

        {/* ********************************************************************** */}
        {/* ******************************** Notifications************************* */}
        {/* ********************************************************************** */}

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Security</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>

        {/* ********************************************************************** */}
        {/* ******************************** Notifications************************* */}
        {/* ********************************************************************** */}

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Terms of Service</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>

        {/* ********************************************************************** */}
        {/* ******************************** Notifications************************* */}
        {/* ********************************************************************** */}

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Privacy Policy</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 15,
  },
  viewBtns: {
    flex: 4,
    // justifyContent: "center"
  },
  btn: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // paddingLeft: 20,
    // paddingRight: 20,
    // height: 67,
    // backgroundColor: colors.offwhite,
    // marginBottom: 25,
    // borderRadius: 10
    height: 57,
    backgroundColor: colors.offwhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  txt: {
    fontFamily: "Futura",
    color: colors.darkblue,
    fontSize: 18,
    marginLeft: 20,
  },
  txtTitle: {
    fontFamily: "Futura",
    fontSize: 40,
    color: colors.darkblue,
  },
  viewTitle: {
    flex: 1,
  },
});
