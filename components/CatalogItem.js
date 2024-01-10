import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import FilledGradientButton from "../components/FilledGradientButton";

const CatalogItem = (props) => {
  //   console.log(props.shoeImage);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchHighlight}
        activeOpacity={0.9}
        underlayColor="rgba(255, 255, 255, 0.1)"
        onPress={() => props.onSelectProduct(props.id)}
      >
        <View style={styles.productInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={[styles.shoeImage, { width: 265, height: 166 }]}
              source={{ uri: props.shoeImage }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.shoeName}>{props.shoeName}</Text>
            <Text style={styles.shoePrice}>Pricing € {props.shoePrice}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.buttonContainer}>
        <FilledGradientButton
          buttonText="+ Add to cart"
          onPress={props.onAddToCart}
        ></FilledGradientButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E30",
    borderRadius: 12,

    alignItems: "center",

    marginBottom: 52,
  },
  productInfoContainer: {
    gap: 4,
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
    alignItems: "center",
  },
  shoeName: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  shoePrice: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  buttonContainer: {
    width: 240,
    position: "absolute",
    bottom: -35,
  },
  touchHighlight: {
    width: "100%",
    paddingBottom: 44,
    borderRadius: 12,
  },
});

export default CatalogItem;
