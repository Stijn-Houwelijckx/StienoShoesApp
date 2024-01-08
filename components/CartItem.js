import React, { useState, useEffect } from "react";
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

import { useSelectedItemsContext } from "../components/SelectedItemsContext";
import FilledGradientButton from "../components/FilledGradientButton";

const CartItem = (props) => {
  const { addToCart, portNumber, selectedItems } = useSelectedItemsContext();
  const [count, setCount] = useState(0);

  // Set the initial count from the context
  useEffect(() => {
    const existingItem = selectedItems.find((item) => item.itemId === props.id);
    if (existingItem) {
      setCount(existingItem.count);
    }
  }, [props.id, selectedItems]);

  // Update count when the "add" button is pressed
  const handleCountIncreasePress = () => {
    const newCount = count + 1;
    setCount(newCount);
    addToCart(props.id, newCount);
  };

  // Update count when the "remove" button is pressed, ensuring it doesn't go below 0
  const handleCountDecreasePress = () => {
    const newCount = Math.max(0, count - 1);
    setCount(newCount);
    addToCart(props.id, newCount);
  };

  //   console.log("test: " + props.shoeImage);
  if (Platform.OS === "android") {
    shoeImage = props.shoeImage.replace(
      "stienoshoes.ddev.site",
      `10.0.2.2:${portNumber}`
    );
  }

  console.log(selectedItems);
  console.log("Current count: " + count);

  //   console.log("test after: " + shoeImage);

  //   console.log(props);

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
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleCountIncreasePress}
          >
            <IonIcon name="add" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={handleCountDecreasePress}
          >
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

    marginBottom: 12,
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
