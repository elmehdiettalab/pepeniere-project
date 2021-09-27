import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";
import paypal from "../../assets/paypal_PNG7.png";
import creditCard from "../../assets/credit-cards.png";

const CheckoutScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.txtHeader}>Checkout</Text>
      </View>

      <View style={styles.viewBody}>
        <View style={styles.viewBoxTotal}>
          <Text style={styles.txtTotalTitle}>Total</Text>
          <Text style={styles.txtTotal}>1900.00 MAD</Text>
        </View>

        <View style={styles.viewPayment}>
          {/* ****************** Paypal *********************$ */}

          <View style={styles.viewPaypal}>
            <TouchableOpacity style={styles.btnPaypal}>
              <Image
                source={require("../../assets/paypal.png")}
                style={styles.imgPaypal}
              />
              <Text style={styles.txtPaypal}>Pay with PayPal</Text>
            </TouchableOpacity>
          </View>

          {/* ****************** Credit Card *********************$ */}

          <View style={styles.viewCard}>
            <TouchableOpacity style={styles.btnCard}>
              <Image
                source={require("../../assets/credit-cards.png")}
                style={styles.imgCard}
              />
              <Text style={styles.txtCard}>Pay with Credit Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
  viewHeader: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15,
  },
  txtHeader: {
    fontFamily: "Futura",
    fontSize: 45,
    color: colors.darkblue,
  },
  viewBody: {
    flex: 3,
    padding: 10,
  },
  viewBoxTotal: {
    height: 205,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 20,
  },
  txtTotalTitle: {
    fontFamily: "Futura",
    color: colors.offwhite,
    fontSize: 45,
  },
  txtTotal: {
    fontFamily: "Futura",
    color: colors.offwhite,
    fontSize: 25,
  },
  imgPaypal: {
    width: 40,
    height: 40,
    marginRight: 30
  },
  imgCard: {
    width: 40,
    height: 40,
    marginRight: 30
  },

  btnPaypal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.offwhite,
    borderRadius: 10,
    height: 57,
    paddingLeft: 20,
    marginBottom: 20
  },
  btnCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.offwhite,
    borderRadius: 10,
    height: 57,
    paddingLeft: 20,
  },
  viewPayment: {
    paddingTop: 70,
  },
  txtPaypal: {
    fontFamily: "Futura", 
    color: colors.darkblue
  }, 
  txtCard: {
    fontFamily: "Futura",
    color: colors.darkblue
  }
});
