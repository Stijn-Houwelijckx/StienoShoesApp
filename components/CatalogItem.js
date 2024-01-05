import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const CatalogItem = (props) => {
  //   console.log(props.shoeImage);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.shoeImage, { width: 265, height: 166 }]}
          //   source={{ uri: props.shoeImage }}
          source={require("../assets/FlexFit-Fusion.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.shoeName}>{props.shoeName}</Text>
        <Text style={styles.shoePrice}>Pricing € {props.shoePrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
    backgroundColor: "#2E2E30",
    borderRadius: 12,

    paddingBottom: 44,
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
});

export default CatalogItem;
