import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";

let DATA = [
  {
    id: "0",
    name: "Optunia",
    price: 300,
    img: require("../../assets/img1.png"),
  },
  {
    id: "1",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
  },
  {
    id: "2",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
  },
  {
    id: "3",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
  },
  {
    id: "4",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
  },
  // {
  //   id: "5",
  //   name: "Cactus sauvage",
  //   price: 89,
  //   img: require("../../assets/img2.png"),
  // },
  // {
  //   id: "6",
  //   name: "Cactus sauvage",
  //   price: 89,
  //   img: require("../../assets/img2.png"),
  // },
  // {
  //   id: "7",
  //   name: "Cactus sauvage",
  //   price: 89,
  //   img: require("../../assets/img2.png"),
  // },
];

const ListingsScreen = (props) => {
  const [items, setItems] = useState(DATA);

  const deleteItem = (id) => {
    let clone = items.slice(0);
    clone.splice(id, 1);
    setItems(clone);
    console.log(clone);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewScrollview}>
        <ScrollView style={styles.scrollview}>
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
                    <Text style={styles.txtPrice}> {item.price} MAD </Text>
                  </View>

                  {/* ****************** Buttons *********************$ */}

                  <View style={styles.viewButtons}>
                    <TouchableOpacity
                      style={styles.btnDelete}
                      onPress={() => deleteItem(item.id)}
                    >
                      <Entypo name="cross" size={18} color={colors.offwhite} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.viewAddListing}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => props.navigation.navigate('add-plant')}>
          <Entypo name="plus" size={24} color={colors.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    // padding: 10,
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
    // width: 90,
  },
  txtPrice: {
    fontFamily: "Futura",
    fontSize: 13,
    color: colors.darkblue,
  },
  viewButtons: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flexDirection: "row",
    // marginLeft: 90,
  },
  btnDelete: {
    width: 25,
    height: 25,
    backgroundColor: colors.lightred,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  viewAddListing: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btnAdd: {
    width: 60,
    height: 60,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
