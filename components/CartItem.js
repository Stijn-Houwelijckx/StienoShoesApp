import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import FilledGradientButton from "../components/FilledGradientButton";

const CartItem = (props) => {
  //   console.log("test: " + props.shoeImage);
  if (Platform.OS === "android") {
    shoeImage = props.shoeImage.replace(
      "stienoshoes.ddev.site",
      `10.0.2.2:${props.portNumber}`
    );
  }

  //   console.log("test after: " + shoeImage);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchHighlight}
        activeOpacity={0.9}
        underlayColor="rgba(255, 255, 255, 0.1)"
        // onPress={() => props.onSelectProduct(props.id)}
      >
        <View style={styles.productInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={[styles.shoeImage, { width: 100, height: 63 }]}
              source={{ uri: shoeImage }}
              //   source={require("../assets/FlexFit-Fusion.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.shoeName}>{props.shoeName}</Text>
            <Text style={styles.shoePrice}>Price € {props.shoePrice}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.counter}>2</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <IonIcon name="add" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <IonIcon name="remove" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // gap: 4,
    backgroundColor: "#3D3D3F",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,

    flexDirection: "row",

    justifyContent: "space-between",
  },
  productInfoContainer: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  shoeImage: {
    resizeMode: "contain",
  },
  textContainer: {
    gap: 4,
    paddingHorizontal: 8,
    // alignItems: "center",
    maxWidth: 170,
  },
  shoeName: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  shoePrice: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "#909090",
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  counter: {
    color: "#FFFFFF",
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    backgroundColor: "#4E4E50",
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 2,
  },
});

export default CartItem;
