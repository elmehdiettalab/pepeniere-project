import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";

const AddPlantScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewTitle}>
        <Text style={styles.txtTitle}>Add a plant</Text>
      </View>

      <View style={styles.viewAvatar}>
        <TouchableOpacity style={styles.btnAvatar}>
          <Entypo name="plus" size={44} color={colors.offwhite} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewButtons}>
        {/* ************************************************************************ */}
        {/* **********************************   NAME   ********************************* */}
        {/* ************************************************************************ */}

        <View style={styles.viewInput}>
          <Text style={styles.txtInput}>Name</Text>
          <TextInput
            placeholder="ex: phornia"
            placeholderTextColor={colors.black}
            style={styles.input}
            placeholderTextColor="#999"
            // value={lastname}
            // onChangeText={setLastname}
          />
        </View>

        {/* ************************************************************************ */}
        {/* **********************************   PRICE   ********************************* */}
        {/* ************************************************************************ */}

        <View style={styles.viewInput}>
          <Text style={styles.txtInput}>Price</Text>
          <TextInput
            placeholder="ex: 130MAD"
            placeholderTextColor={colors.black}
            style={styles.input}
            placeholderTextColor="#999"
            // value={lastname}
            // onChangeText={setLastname}
          />
        </View>

        {/* ************************************************************************ */}
        {/* **********************************   ButtonAdd   ********************************* */}
        {/* ************************************************************************ */}

        <View style={styles.viewBtnAdd}>
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.txtAdd}>Add</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddPlantScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  viewTitle: {
    flex: 1,
    padding: 15,
  },
  txtTitle: {
    fontFamily: "Futura",
    color: colors.darkblue,
    fontSize: 22,
  },
  viewAvatar: {
    flex: 2,
    alignItems: "center",
  },
  viewButtons: {
    flex: 4,
    paddingTop: 20,
  },
  btnAvatar: {
    width: 160,
    height: 160,
    backgroundColor: colors.grey,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viewInput: {
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20,
  },
  input: {
    height: 43,
    backgroundColor: colors.grey,
    borderRadius: 9,
    paddingLeft: 10,
    marginTop: 5,
    fontFamily: "Futura",
  },
  txtInput: {
    fontFamily: "Futura",
    color: colors.darkblue,
  },

  viewBtnAdd: {
      alignItems: "center",
      padding: 20

  }, 
  btnAdd: {
      width: 100, 
      height: 47, 
      backgroundColor: colors.green,
      justifyContent: "center", 
      alignItems: "center",
      borderRadius: 10
  }, 
  txtAdd: {
      fontFamily: "Futura", 
      color: colors.offwhite, 
      fontSize: 15
  }
});
