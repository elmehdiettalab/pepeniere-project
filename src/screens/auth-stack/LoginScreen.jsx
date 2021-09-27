import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as colors from "../../configs/colors";
const imgBg = require("../../assets/background2.jpeg");
const { width, height } = Dimensions.get("window");
import * as firebase from "firebase";
import { connect } from "react-redux";
import { login } from "../../configs/state-management/actions";

const LoginScreen = (props) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((loggedInUser) => {
        {
          console.log('SIGNIN ' + email )
          console.log(loggedInUser); 
          props.login(loggedInUser.user);
          // props.navigation.navigate('homepage');
          // props.login({email: email})
        }
      })
      .catch((error) => {
        console.log(error)
        console.warn("Login fail!! " + email +password);
        // console.log(loggedInUser)
      });
  };

  // if (!fontsLoaded) {
  //   return null;
  // } else {
    return (
      <View style={styles.viewContainer}>
        {/* <ImageBackground source={imgBg} style={styles.imgBG}> */}
          {/* ********************************************************************** */}
          {/* ********************************************************************** */}

          <View style={styles.viewLoginCard}>
            {/* ********************************************************************** */}
            {/* ********************************************************************** */}

            <View style={styles.viewTexts}>
              <View style={styles.viewIntro1}>
                <Text style={styles.txtIntro1}>Let's sign you in.</Text>
              </View>
              <View style={styles.viewIntro2}>
                <Text style={styles.txtIntro2}>Hello again!</Text>
              </View>
            </View>

            {/* ********************************************************************** */}
            {/* ********************************************************************** */}

            <View style={styles.viewInput}>
              <TextInput
                placeholder="Phone or email"
                placeholderTextColor={colors.black}
                style={styles.input}
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={colors.black}
                style={styles.input}
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
              autoCapitalize="none"
              />
            </View>

            {/* ********************************************************************** */}
            {/* ********************************************************************** */}

            <View style={styles.viewButtons}>
              <TouchableOpacity style={styles.btnSignIn} onPress={()=>handleLogin()}>
                <Text style={styles.txtSignIn}>Sign In</Text>
              </TouchableOpacity>

              <View style={styles.viewRegister}>
                <Text style={styles.txtRegister1}>Don't have an account?</Text>
                <TouchableOpacity style={styles.btnRegister} onPress={() => {props.navigation.navigate('phone-auth')}}>
                  <Text style={styles.txtRegister2}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ********************************************************************** */}
            {/* ********************************************************************** */}
          </View>
        {/* </ImageBackground> */}
      </View>
    );
  // }
};

const mapDispatchToProps = (dispatch) => ({
  login : (usr) => dispatch(login(usr)), 
})

const mapStateToProps = (state)=>{
  return state; 
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    // backgroundColor: colors.green,
  },
  viewLoginCard: {
    flex: 1,
    padding: 30,
  },

  imgBG: {
    width,
    height,
    flex: 1,
  },

  //
  //
  //

  viewInput: {
    flex: 2,
  },
  input: {
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.darkblue,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 9,
    color: colors.offwhite,
    marginBottom: 20,
    fontFamily: "Futura",
  },
  //
  //
  //

  viewButtons: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  btnSignIn: {
    height: 50,
    width: "100%",
    borderRadius: 9,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
  },
  txtSignIn: {
    fontFamily: "Futura",
    fontSize: 16,
    color: colors.darkblue,
  },

  //
  //
  //
  viewTexts: {
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
  },

  txtIntro1: {
    fontFamily: "Futura",
    fontSize: 40,
    color: colors.darkblue,
    // backgroundColor: colors.offwhite,
  },
  txtIntro2: {
    fontFamily: "Futura",
    fontSize: 35,
    color: colors.darkblue,
    // backgroundColor: colors.offwhite,
    marginTop: 10,
  },

  //
  viewRegister: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  txtRegister1: {
    fontFamily: "Futura",
    color: colors.darkblue,
    marginRight: 5,
  },
  txtRegister2: {
    fontFamily: "Futura",
    color: colors.green,
  },
});
