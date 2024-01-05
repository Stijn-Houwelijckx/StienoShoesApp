import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const PopularCard = (props) => {
  console.log(props.shoeImage);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={[styles.popularShoeImage, { width: 265, height: 166 }]}
          source={{ uri: props.shoeImage }}
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
    gap: 8,
  },
  imageContainer: {
    backgroundColor: "#2E2E30",
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: 281,
    height: 198,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  popularShoeImage: {
    resizeMode: "contain", // Adjust the image content mode
  },
  textContainer: {
    gap: 4,
    paddingHorizontal: 8,
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

export default PopularCard;