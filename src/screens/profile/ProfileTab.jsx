import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";

const ProfileTab = (props) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewInfo}>
        <View style={styles.viewAvatar}>
          <Image
            source={require("../../assets/avatar-04.png")}
            style={styles.imgAvatar}
          />
        </View>

        <Text style={styles.txtName}>Fatima Hajjaj</Text>
        <View style={styles.viewLocation}>
          <Entypo name="location-pin" size={20} color={colors.grey} />
          <Text style={styles.txtLocation}>Rabat, Morocco</Text>
        </View>
      </View>
      <View style={styles.viewOtherSettings}>
        {/* ******************** Listings **************************** */}

        <TouchableOpacity style={styles.btnListings} onPress={() => props.navigation.navigate('listings')}>
          <Text style={styles.txtListings}>Listings</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>

        {/* ******************** Settings **************************** */}

        <TouchableOpacity style={styles.btnSettings} onPress={()=>props.navigation.navigate('settings')}>
          <Text style={styles.txtSettings}>Settings</Text>
          <Entypo name="chevron-right" size={24} color={colors.darkblue} />
        </TouchableOpacity>

        {/* ************************************************ */}
      </View>
      <View style={styles.viewSignOut}>
        <TouchableOpacity style={styles.btnSignOut}>
          <Text style={styles.txtSignOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    // padding: 10,
  },
  viewInfo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  viewOtherSettings: {
    flex: 1,
    padding: 20,
  },
  viewSignOut: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imgAvatar: {
    height: 150,
    width: 150,
  },
  viewAvatar: {
    borderWidth: 15,
    borderRadius: 100,
    borderColor: colors.green,
    marginBottom: 10,
  },
  txtName: {
    fontFamily: "Futura",
    fontSize: 24,
    color: colors.darkblue,
    marginBottom: 10,
  },
  viewLocation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  txtLocation: {
    fontFamily: "Futura",
    fontSize: 14,
    color: colors.grey,
    marginLeft: 3,
  },
  btnListings: {
    height: 57,
    backgroundColor: colors.offwhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  txtListings: {
    fontFamily: "Futura",
    color: colors.darkblue,
    fontSize: 18,
    marginLeft: 20,
  },
  btnSettings: {
    height: 57,
    backgroundColor: colors.offwhite,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  txtSettings: {
    fontFamily: "Futura",
    color: colors.darkblue,
    fontSize: 18,
    marginLeft: 20,
  },
  btnSignOut: {
    height: 57,
    width: "100%",
    backgroundColor: colors.lightred,
    justifyContent: "center",
    alignItems :"center", 
    borderRadius: 10
  },
  txtSignOut: {
      fontFamily: "Futura", 
      fontSize: 18, 
      color: colors.offwhite, 
  }
});
