import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
// import { useFonts, Futura } from "@expo-google-fonts/reem-kufi";
import * as colors from "../../configs/colors"
import AppLoading from "expo-app-loading";

const { width, height } = Dimensions.get("window");
const imgBg = require("../../assets/background.jpeg");
const FirstScreen = (props) => {

    return (
      <View style={styles.frame}>
        <ImageBackground source={imgBg} style={styles.imgBG}>
          <View style={styles.viewContainer}>
            <View style={styles.viewTitles}>
              <Text style={styles.txtTitle1}>Pepeniere</Text>
              <Text style={styles.txtTitle2}>For the love of nature</Text>
            </View>

            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.btnLetsGo} onPress={()=>props.navigation.navigate('profile-info')}>
                <Text style={styles.txtLetsGo}>Let's Go.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>props.navigation.navigate('login')}>
                <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
};

export default FirstScreen;

const styles = StyleSheet.create({
  frame: {
    flex: 1,
  },
  imgBG: {
    width,
    height,
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    padding: 50,
  },
  viewTitles: {
    flex: 4,
    justifyContent: "flex-end",
  },
  viewButton: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle1: {
    fontSize: 60,
    fontFamily: 'Futura', 
    color: colors.offwhite
  },
  txtTitle2: {
    fontSize: 20,
    fontFamily: 'Futura', 
    color: colors.offwhite
  },
  btnLetsGo: {
    height: 44, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: colors.offwhite, 
    width: '100%', 
    borderRadius: 9
  }, 
  txtLetsGo: {
    fontSize: 15, 
    color: colors.darkblue, 
    fontFamily: "Futura"
  },
  btnLogin: {
    height: 44, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: colors.green, 
    width: '100%', 
    borderRadius: 9, 
    marginTop: 10
  }, 
  txtLogin: {
    fontSize: 15, 
    color: colors.offwhite, 
    fontFamily: "Futura"
  }
});
