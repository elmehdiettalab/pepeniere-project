import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as colors from "../../configs/colors";

const DATA = [
  {
    id: "1",
    name: "Optunia",
    price: 300,
    img: require("../../assets/img1.png"),
  },
  {
    id: "2",
    name: "Cactus sauvage",
    price: 89,
    img: require("../../assets/img2.png"),
  },
  {
    id: "3",
    name: "Ageratum",
    price: 103,
    img: require("../../assets/img3.png"),
  },
  {
    id: "4",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
  {
    id: "5",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
  {
    id: "6",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
  {
    id: "7",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
  {
    id: "8",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
  {
    id: "9",
    name: "Fuchsia",
    price: 130,
    img: require("../../assets/img4.png"),
  },
];

const { height, width } = Dimensions.get("screen");

const Card = ({ id, price, itemName, image }) => (
  <View style={styles.viewCard}>
    <View style={styles.viewCardInner}>
      {/* ****************** Image *********************$ */}

      <View style={styles.viewImageContainer}>
        <Image source={image} style={styles.imgCard} />
      </View>

      {/* ****************** Texts *********************$ */}

      <View style={styles.viewTexts}>
        <Text style={styles.txtNameItem}> {itemName} </Text>
        <Text style={styles.txtPrice}> {price} </Text>
      </View>

      {/* ****************** Buttons *********************$ */}

      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.viewRectangle} onPress={()=>alert('Sayonara!')}>
          <Entypo name="plus" size={12} color={colors.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {

  const renderItem = ({ item }) => (
    <Card
      id={item.id}
      price={item.price}
      itemName={item.name}
      image={item.img}
    />
  );

    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewHeader}>
          <Text style={styles.txtHeader}>Home</Text>
          <View style={styles.viewFilter}>
            <Text style={styles.txtFilter}>All</Text>
            <TouchableOpacity style={styles.btnFilter}>
              <FontAwesome
                name="chevron-down"
                size={14}
                color={colors.darkblue}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewItems}>
          <View style={styles.viewFlatlist}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.flatlist}
            />
          </View>
        </View>
      </View>
    );

};

export default HomeScreen;

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
  viewFilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtFilter: {
    fontFamily: "Futura",
    fontSize: 16,
    color: colors.darkblue,
    marginRight: 15,
  },
  viewItems: {
    flex: 3,
  },
  viewCard: {
    width: "100%",
    height: 100,
    // backgroundColor: colors.offwhite,
    padding: 10,
  },

  viewCardInner: {
    backgroundColor: colors.offwhite,
    width: "100%",
    height: "100%",
    borderRadius: 11,
    alignItems: "center",
    flexDirection: "row",
    padding: 10
  },

  imgCard: {
    width: 60,
    height: 60,
  },
  viewImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 11,
    overflow: "hidden",
  },
  viewTexts: {
    height: "80%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  txtNameItem: {
    fontFamily: "Futura",
    fontSize: 13,
    color: colors.darkblue,
    width: 90
  },
  txtPrice: {
    fontFamily: "Futura",
    fontSize: 13,
    color: colors.darkblue,
  },
  viewButtons: {
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  viewRectangle: {
    backgroundColor: colors.green,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
});
