import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";

const { height, width } = Dimensions.get("screen");

let DATA = [
  {
    id: "0",
    name: "Optunia",
    price: 300,
    img: require("../../assets/img1.png"),
    quantity: 1,
  },
  {
    id: "1",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
    quantity: 1,
  },
  {
    id: "2",
    name: "Ageratum",
    price: 103,
    img: require("../../assets/img3.png"),
    quantity: 1,
  },
  {
    id: "3",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
    quantity: 1,
  },
  {
    id: "4",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
    quantity: 1,
  },
  // {
  //   id: "5",
  //   name: "Fuchsia",
  //   price: 130,
  //   img: require("../../assets/img4.png"),
  //   quantity: 1,
  // },
  // {
  //   id: "6",
  //   name: "Fuchsia",
  //   price: 130,
  //   img: require("../../assets/img4.png"),
  //   quantity: 1,
  // },
];

const CartTab = (props) => {
  const [items, setItems] = useState(DATA);
  const [total, setTotals] = useState(0.0);

  useEffect(() => {
    let sum = 0;
    items.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotals(sum);
  }, []);
  const addQuantity = (id) => {
    let clone = items.slice(0);
    clone[id].quantity++;
    setItems(clone);

    // Calculate the total;
    let sum = 0;
    items.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotals(sum);
  };

  const minusQuantity = (id) => {
    let clone = items.slice(0);
    clone[id].quantity--;
    setItems(clone);

    // Calculate the total;
    let sum = 0;
    items.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotals(sum);
  };
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <Text style={styles.txtHeader}>Cart</Text>
      </View>

      <View style={styles.viewItems}>
        <View style={styles.viewFlatlist}>
          <ScrollView style={styles.scrollView}>
            {items.map((item) => {
              return (
                <View style={styles.viewCard} key={item.id}>
                  <View style={styles.viewCardInner}>
                    {/* ****************** Image *********************$ */}

                    <View style={styles.viewImageContainer}>
                      <View style={styles.viewImage}>
                        <Image source={item.img} style={styles.imgCard} />
                      </View>
                    </View>

                    {/* ****************** Texts *********************$ */}

                    <View style={styles.viewTexts}>
                      <Text style={styles.txtNameItem}> {item.name} </Text>
                      <Text style={styles.txtPrice}> {item.price} </Text>
                    </View>

                    {/* ****************** Buttons *********************$ */}

                    <View style={styles.viewButtons}>
                      <TouchableOpacity
                        style={styles.viewRectangle1}
                        onPress={() => minusQuantity(item.id)}
                      >
                        <Entypo name="minus" size={12} color={colors.green} />
                      </TouchableOpacity>
                      <Text>{item.quantity}</Text>
                      <TouchableOpacity
                        style={styles.viewRectangle2}
                        // onPress={() => alert("Sayonara!")}
                        onPress={() => addQuantity(item.id)}
                        // onPress={() => addQuantity()}
                      >
                        <Entypo name="plus" size={12} color={colors.offwhite} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
            <View style={styles.viewCheckout}>
              <View style={styles.viewTotal}>
                <Text style={styles.txtTotal}>
                  Total: {total.toFixed(2)} MAD
                </Text>
              </View>

              <View style={styles.viewBtnCheckout}>
                <TouchableOpacity
                  style={styles.btnCheckout}
                  onPress={() => props.navigation.navigate("checkout")}
                >
                  <Text style={styles.txtCheckout}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CartTab;

const styles = StyleSheet.create({
  flatlist: {
    height: height / 1.5,
  },
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
  viewCard: {
    width: "100%",
    height: 100,
    // backgroundColor: colors.offwhite,
    padding: 10,
  },

  viewCardInner: {
    flex: 1,
    backgroundColor: colors.offwhite,
    width: "100%",
    height: "100%",
    borderRadius: 11,
    alignItems: "center",
    flexDirection: "row",
    // padding: 10,
  },

  imgCard: {
    width: 60,
    height: 60,
  },
  viewImageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  viewImage: {
    width: 60,
    height: 60,
    borderRadius: 11,
    overflow: "hidden",
  },
  viewTexts: {
    height: "80%",
    justifyContent: "center",
    paddingLeft: 10,
    flex: 5,
    // backgroundColor: colors.darkblue
  },
  txtNameItem: {
    fontFamily: "Futura",
    fontSize: 13,
    color: colors.darkblue,
    width: 90,
  },
  txtPrice: {
    fontFamily: "Futura",
    fontSize: 13,
    color: colors.darkblue,
  },
  viewButtons: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flexDirection: "row",
    // marginLeft: 90,
  },
  viewRectangle1: {
    // backgroundColor: colors.green,
    borderWidth: 1,
    borderColor: colors.green,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    // marginRight: 25
  },
  viewRectangle2: {
    backgroundColor: colors.green,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    // marginLeft: 25
  },
  viewItems: {
    flex: 3,
  },
  viewCheckout: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewTotal: {
    height: 60,
    justifyContent: "center",
    alignContent: "center",
  },
  viewBtnCheckout: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCheckout: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 44,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  txtCheckout: {
    fontFamily: "Futura",
    color: colors.offwhite,
    fontSize: 15,
  },
  txtTotal: {
    fontFamily: "Futura",
    color: colors.darkblue,
    fontSize: 15,
  },
});
