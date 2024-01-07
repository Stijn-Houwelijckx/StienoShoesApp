import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const CatalogItem = (props) => {
  //   console.log(props.shoeImage);
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={props.onPress}
    >
      <LinearGradient
        colors={["#FCAD72", "#FF626D"]}
        style={styles.button}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 360,
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    // fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CatalogItem;
