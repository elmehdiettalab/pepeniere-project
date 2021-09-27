import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";
import * as Font from "expo-font";
import MoroccoFlag from "../../assets/flags/MA.png";
import * as colors from "../../configs/colors";
// import { Futura } from "@expo-google-fonts/reem-kufi";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import AppLoading from "expo-app-loading";
class AddPhoneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // fontsLoaded: false,
      confirm: null,
      code: "",
      phoneNumber: "",
      showButton: false,
      modalVisible: false,
    };
    this.recaptchaVerifier = React.createRef();
  }

  signInWithPhoneNumber = (phoneNumber) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, this.recaptchaVerifier.current)
      .then((res) => {
        this.setState({ confirm: res });
        this.props.navigation.navigate("verify-phone-auth", {
          confirm: this.state.confirm,
          phoneNumber: this.state.phoneNumber,
        });
      });
  };

  // async loadFonts() {
  //   await Font.loadAsync({
  //     // Load a font `Montserrat` from a static resource
  //     Futura: Futura,
  //   });
  //   this.setState({ fontsLoaded: true });
  // }

  // componentDidMount() {
  //   this.loadFonts();
  // }

  nextScreen() {
    if (this.state.phoneNumber.length > 8) {
      console.log("HEYO!!!!");
      this.signInWithPhoneNumber(`+212${this.state.phoneNumber}`);
    } else {
      this.setState({
        modalVisible: true,
      });
    }
  }

  render() {
    // if (this.state.fontsLoaded) {
      return (
        <View style={styles.viewContainer}>
          <FirebaseRecaptchaVerifierModal
            ref={this.recaptchaVerifier}
            firebaseConfig={firebase.app().options}
            attemptInvisibleVerification={true}
          />
          <View style={styles.viewInputPhone}>
            <Text style={styles.txtLabel}>Phone Number</Text>
            <View style={styles.viewInputCard}>
              <Image source={MoroccoFlag} style={styles.imgFlag} />
              <Text style={styles.txtIndicative}>+212</Text>
              <TextInput
                placeholder="6xx-xx-xx-xx"
                placeholderTextColor={colors.black}
                style={styles.input}
                placeholderTextColor="#999"
                onChangeText={(e) => {
                  if (e.length >= 8) {
                    this.setState({ phoneNumber: e });
                    this.setState({ showButton: true });
                  } else {
                    this.setState({ showButton: false });
                  }
                }}
              />
            </View>
          </View>

          <View style={styles.viewButtons}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => this.nextScreen()}
            >
              <Entypo name="chevron-right" size={24} color={colors.offwhite} />
            </TouchableOpacity>
          </View>

          {/* ********************************************************************** */}
          {/* ********************************************************************** */}

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Enter phone number!</Text>

                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      backgroundColor: colors.darkblue,
                    }}
                    onPress={() => {
                      this.setState({
                        modalVisible: !this.state.modalVisible,
                      });
                    }}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>

          {/* ********************************************************************** */}
          {/* ********************************************************************** */}
        </View>
      );
    // } else {
    //   return null;
    // }
  }
}

export default AddPhoneScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  viewInputPhone: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  txtLabel: {
    fontFamily: "Futura",
    color: colors.darkblue,
  },
  viewInputCard: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    backgroundColor: colors.semidarkgrey,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 9,
    marginTop: 10,
  },
  //   Input
  imgFlag: {
    marginRight: 10,
  },
  txtIndicative: {
    marginRight: 10,
    fontFamily: "Futura",
    color: colors.darkblue,
  },
  input: {
    fontFamily: "Futura",
    color: colors.darkblue,
  },
  viewButtons: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "flex-end",
  },
  btnNext: {
    width: 50,
    height: 50,
    backgroundColor: colors.green,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
  },

  // **********************************************************************
  //                Modal Styles
  // **********************************************************************

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontFamily: "Futura",
    color: colors.offwhite,
    textAlign: "center",

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Futura",
    color: colors.darkblue,
  },
});

// 636976912