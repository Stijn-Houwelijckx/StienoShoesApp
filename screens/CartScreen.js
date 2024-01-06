import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";

import { useSelectedItemsContext } from "../components/SelectedItemsContext";
import BottomNav from "../components/BottomNav";

const CartScreen = ({ navigation }) => {
  const { selectedItemIds, clearCart } = useSelectedItemsContext();

  return (
    <View style={styles.screen}>
      {selectedItemIds.length === 0 ? (
        <Text>No items in the cart</Text>
      ) : (
        <>
          {/* Display the item IDs in the cart */}
          <Text>Items in Cart: {selectedItemIds.join(", ")}</Text>

          {/* Button to clear the items in the cart */}
          <Button
            title="Clear Cart"
            onPress={() => {
              clearCart();
            }}
          />
        </>
      )}

      {/* Your screen content */}
      {/* <Text>This is the Home Screen</Text> */}

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen={"Cart"} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F8F6F6",
  },

  // ======================
});

export default CartScreen;
