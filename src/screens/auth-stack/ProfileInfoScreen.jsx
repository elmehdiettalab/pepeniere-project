import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as colors from "../../configs/colors";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import "firebase/firestore";

const ProfileInfoScreen = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const DB = firebase.firestore();
  // const {phoneNumber, uid} = props.route.params; 



  // *************** IMAGE PICKER FUNCTION **************
  // ********** CHOOSE A PHOTO FROM GALLERY *************
  const pickImage = () => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          //   alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then((result) => {
      if (!result.cancelled) {
        setImage(result.uri);
        // console.log(result)
      }
    });
  };

  // **************** SIGN UP FUNCTION ******************
  const handleSignUp = () => {
    // if (password !== null && image !== null && email !== null) {
    if (password !== null && email !== null) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          userCredentials.user.updateProfile({
            displayName: firstname + lastname,
            photoURL: image,
            // phoneNumber
          });
          console.log(userCredentials); 
        })
        .then((userCredentials) => {
          userCredentials.user.updateProfile();
          console.log(userCredentials); 
        })
        .catch((err) => setErrorMsg(err));

      sumbitToDB();
      props.navigation.navigate("login");
      setEmail(''); 
      setFirstname(''); 
      setLastname(''); 
      setPassword(''); 
      setImage(null); 
    }
    console.log(errorMsg);
  };

  // **************** SUBMIT TO FIRESTORE FUNCTION ******************
  const sumbitToDB = () => {
    DB.collection("users").add({
      image,
      firstname,
      lastname,
      email,
      password,
      // phoneNumber
    });
    console.log('added!!')
  };

  // if (!fontsLoaded) {
  //   return null;
  // } else {
    return (
      <View style={styles.viewContainer}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.viewAvatar}>
            <TouchableOpacity
              style={styles.btnAvatar}
              onPress={() => pickImage()}
            >
              {!image ? (
                <AntDesign name="user" size={24} color={colors.darkblue} />
              ) : (
                <Image source={{ uri: image }} style={styles.imgAvatar} />
              )}
            </TouchableOpacity>
            <Text style={styles.txtLabelAvatar}>Profile Picture</Text>
          </View>

          {/* ************************************************************************ */}
          {/* **********************************   FIRSTNAME   ********************************* */}
          {/* ************************************************************************ */}

          <View style={styles.viewInput}>
            <Text style={styles.txtInput}>FirstName</Text>
            <TextInput
              placeholder="ex: elmehdi"
              placeholderTextColor={colors.black}
              style={styles.input}
              placeholderTextColor="#999"
              value={firstname}
              onChangeText={setFirstname}
            />
          </View>

          {/* ************************************************************************ */}
          {/* **********************************   LASTNAME   ********************************* */}
          {/* ************************************************************************ */}

          <View style={styles.viewInput}>
            <Text style={styles.txtInput}>LastName</Text>
            <TextInput
              placeholder="ex: ettalab"
              placeholderTextColor={colors.black}
              style={styles.input}
              placeholderTextColor="#999"
              value={lastname}
              onChangeText={setLastname}
            />
          </View>
          {/* ************************************************************************ */}
          {/* **********************************   EMAIL   ********************************* */}
          {/* ************************************************************************ */}

          <View style={styles.viewInput}>
            <Text style={styles.txtInput}>Email</Text>
            <TextInput
              placeholder="ex: elmehdi@gmail.com"
              placeholderTextColor={colors.black}
              style={styles.input}
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {/* ************************************************************************ */}
          {/* **********************************   PASSWORD   ********************************* */}
          {/* ************************************************************************ */}

          <View style={styles.viewInput}>
            <Text style={styles.txtInput}>Password</Text>
            <TextInput
              placeholder="ex: /:AZERT123"
              placeholderTextColor={colors.black}
              style={styles.input}
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* ************************************************************************ */}
          {/* **********************************   Button   ********************************* */}
          {/* ************************************************************************ */}

          <View style={styles.viewButtons}>
            <TouchableOpacity
              style={styles.btnSave}
              onPress={() => handleSignUp()}
            >
              <Text style={styles.txtSave}>Save</Text>
            </TouchableOpacity>

            <View style={styles.viewInfo}>
              <Text style={styles.txtInfo}>Already have an account? </Text>
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  // }
};

export default ProfileInfoScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  viewAvatar: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAvatar: {
    height: 120,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 120 / 2,
    overflow: "hidden",
  },
  txtLabelAvatar: {
    fontFamily: "Futura",
    marginTop: 10,
    marginBottom: 40,
  },

  //   ScrollView
  // ----------------

  scrollview: {
    paddingBottom: 90,
  },
  //   TextInput
  // ----------------
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

  //   Buttons
  // ----------------
  viewButtons: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 40,
  },
  btnSave: {
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 9,
  },
  txtSave: {
    fontFamily: "Futura",
    color: colors.offwhite,
    fontSize: 16,
  },
  viewInfo: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  txtInfo: {
    fontFamily: "Futura",
    color: colors.darkblue,
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtLogin: {
    fontFamily: "Futura",
    color: colors.green,
  },

  // -------- Image Avatar -------
  imgAvatar: {
    width: 200,
    height: 200,
  },
});
