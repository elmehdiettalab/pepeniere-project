import React from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "./src/screens/auth-stack/FirstScreen";
import AddPhoneScreen from "./src/screens/auth-stack/AddPhoneScreen";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import * as colors from "./src/configs/colors";
import VerifyPhoneScreen from "./src/screens/auth-stack/VerifyPhoneScreen";
import ProfileInfoScreen from "./src/screens/auth-stack/ProfileInfoScreen";
import LoginScreen from "./src/screens/auth-stack/LoginScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import { connect } from "react-redux";
import CartTab from "./src/screens/cart/CartTab";
import ProfileTab from "./src/screens/profile/ProfileTab";
import CheckoutScreen from "./src/screens/cart/CheckoutScreen";
import ListingsScreen from "./src/screens/profile/ListingsScreen";
import AddPlantScreen from "./src/screens/profile/AddPlantScreen";
import SettingsScreen from "./src/screens/profile/SettingsScreen";

// let firebaseConfig = {
//   apiKey: "AIzaSyCj_jNS2HpaedTmH8G8QXWVUdHgIrA0j5U",
//   authDomain: "pepeniere-project.firebaseapp.com",
//   projectId: "pepeniere-project",
//   storageBucket: "pepeniere-project.appspot.com",
//   messagingSenderId: "518282211118",
//   appId: "1:518282211118:web:0ef457ccbfbe5016ed94bf",
// };
// // Initialize Firebase
// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }

let firebaseConfig = {
  apiKey: "AIzaSyCdL3Pm-2EakFtg_mMdwPjjfe7MZNWf01A",
  authDomain: "pepeniere-app.firebaseapp.com",
  projectId: "pepeniere-app",
  storageBucket: "pepeniere-app.appspot.com",
  messagingSenderId: "107867821990",
  appId: "1:107867821990:web:106acb3fedd79b5be5e167",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={CartTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={ProfileTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="listings"
        component={ListingsScreen}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerStyle: {
            height: 100,
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackImage: () => (
            <>
              <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              <Text style={{fontFamily: "Futura",color: colors.darkblue}}>Profile</Text>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="add-plant"
        component={AddPlantScreen}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerStyle: {
            height: 100,
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackImage: () => (
            <>
              <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              <Text style={{fontFamily: "Futura",color: colors.darkblue}}>Listings</Text>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: false,
          headerBackTitleVisible: false,
          headerStyle: {
            height: 100,
            elevation: 0,
            shadowColor: "transparent",
          },
          headerBackImage: () => (
            <>
              <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              <Text style={{fontFamily: "Futura",color: colors.darkblue}}>Profile</Text>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const StartPoint = ({ user }) => {
  // console.log(user);
  // console.log("Hello!!!");
  return (
    <NavigationContainer>
      {!user.isLogged ? (
        <Stack.Navigator>
          <Stack.Screen
            name="first-auth-screen"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="phone-auth"
            component={AddPhoneScreen}
            options={{
              title: false,
              headerBackTitleVisible: false,
              headerStyle: {
                height: 100,
                elevation: 0,
                shadowColor: "transparent",
              },
              headerBackImage: () => (
                <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              ),
            }}
          />
          <Stack.Screen
            name="verify-phone-auth"
            component={VerifyPhoneScreen}
            options={{
              title: false,
              headerBackTitleVisible: false,
              headerStyle: {
                height: 100,
                elevation: 0,
                shadowColor: "transparent",
              },
              headerBackImage: () => (
                <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              ),
            }}
          />
          <Stack.Screen
            name="profile-info"
            component={ProfileInfoScreen}
            options={{
              title: false,
              headerBackTitleVisible: false,
              headerStyle: {
                height: 100,
                elevation: 0,
                shadowColor: "transparent",
              },
              headerBackImage: () => (
                <Entypo name="chevron-left" size={24} color={colors.darkblue} />
              ),
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="homepage"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Cart") {
                iconName = "shoppingcart";
              } else if (route.name === "Profile") {
                iconName = "user";
              }

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={28} color={color} />;
            },
            // tabBarActiveBackgroundColor: "#03c4a1",
            // tabBarInactiveBackgroundColor: "gray",
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "#03c4a1",
            headerShown: false,
          })}
          // tabBarOptions={{
          //   activeTintColor: "#03c4a1",
          //   inactiveTintColor: "gray",
          //   showLabel: false,
          // }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StartPoint);

const Home = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
