import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import MoroccoFlag from "../../assets/flags/MA.png";
import * as colors from "../../configs/colors";
import { Entypo } from "@expo/vector-icons";
import * as firebase from "firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import AppLoading from "expo-app-loading";
class VerifyPhoneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      phoneNumber: this.props.route.params.phoneNumber,
      uid: "",
      confirm: this.props.route.params.confirm,
    };
    this.recaptchaVerifier = React.createRef();
  }

  confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      this.state.confirm,
      this.state.code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
        this.setState({
          phoneNumber: result.user.phoneNumber,
          uid: result.user.uid,
        });
        this.props.navigation.navigate("profile-info", {
          phone: result.user.phoneNumber,
          uid: result.user.uid,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  resend = (phoneNumber) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, this.recaptchaVerifier.current)
      .then((res) => {
        this.setState({ confirm: res });
        // this.props.navigation.navigate("L", {
        //   confirm: this.state.confirm,
        // });
      });
  };


  render() {

      return (
        <View style={styles.viewContainer}>
          <FirebaseRecaptchaVerifierModal
            ref={this.recaptchaVerifier}
            firebaseConfig={firebase.app().options}
            attemptInvisibleVerification={true}
          />
          <View style={styles.viewInputPhone}>
            <Text style={styles.txtLabel}>Verification Code</Text>
            <View style={styles.viewInputCard}>
              {/* <Image source={MoroccoFlag} style={styles.imgFlag} />
              <Text style={styles.txtIndicative}>+212</Text> */}
              <TextInput
                placeholder="------"
                onChangeText={(e) => this.setState({ code: e })}
                placeholderTextColor={colors.black}
                style={styles.input}
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.viewButtons}>
            <TouchableOpacity
              style={styles.btnResend}
              onPress={() => this.resend(`+212${this.state.phoneNumber}`)}
            >
              <Text style={styles.txtResend}>Resend</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => this.confirmCode()}
            >
              <Entypo name="chevron-right" size={24} color={colors.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}

export default VerifyPhoneScreen;

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
    letterSpacing: 10,
  },
  viewButtons: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
    // alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnNext: {
    width: 50,
    height: 50,
    backgroundColor: colors.green,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  btnResend: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  txtResend: {
    fontFamily: "Futura",
    fontSize: 16,
    color: colors.green,
  },
});
