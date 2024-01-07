import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useSelectedItemsContext } from "../components/SelectedItemsContext";
import BottomNav from "../components/BottomNav";
import CartItem from "../components/CartItem";
import FilledGradientButton from "../components/FilledGradientButton";

const CartScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { selectedItems, clearCart, portNumber } = useSelectedItemsContext();

  const getProducts = async () => {
    try {
      //10.0.2.2:60628
      //http://stienoshoes.ddev.site/
      let url;
      if (Platform.OS == "android") {
        //ddev describe om port number te weten te komen
        url = `http://10.0.2.2:${portNumber}/api/catalog/`;
      } else {
        url = "http://stienoshoes.ddev.site/api/catalog/";
      }

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();

      // console.log(json.items);
      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log("Products:", products);

  // console.log("CartScreen: " + selectedItems.itemId);

  return (
    <View style={styles.screen}>
      <View style={styles.cartContainer}>
        <View style={styles.cartHeaderContainer}>
          <Text style={styles.title}>My Cart.</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Catalog");
            }}
          >
            <LinearGradient
              colors={["#FCAD72", "#FF626D"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradientContainer}
            >
              <Text style={styles.buttonText}>Continue Shopping</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.cartContent}>
          {console.log(
            "CartScreen beforeCheck: " +
              (selectedItems && selectedItems.length > 0
                ? selectedItems
                    .map(
                      (item) => `itemId: ${item.itemId} count: ${item.count}`
                    )
                    .join(", ")
                : "empty")
          )}
          {selectedItems.length === 0 ? (
            <Text style={styles.emptyText}>No items in the cart</Text>
          ) : (
            <>
              {/* Map over selectedItems */}
              {selectedItems.map(({ itemId, count }) => {
                const product = products.find((p) => p.id === itemId);

                if (!product) {
                  return null; // or handle the case when 'product' is undefined
                }

                return (
                  <CartItem
                    key={product.id}
                    portNumber={portNumber}
                    shoeImage={product.productImg}
                    shoeName={product.title}
                    shoePrice={(product.price?.amount / 100)?.toFixed(2)}
                    count={count}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
      </View>

      <View style={styles.cartCheckoutContainer}>
        <Text style={styles.totalText}>Subtotal € </Text>
        <FilledGradientButton
          buttonText="Checkout"
          onPress={() => {
            clearCart();
          }}
        />
      </View>

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
    // justifyContent: "center",
    backgroundColor: "#2E2E30",
    justifyContent: "space-between",
  },
  cartContainer: {
    paddingTop: 28,
    paddingHorizontal: 16,
    gap: 20,
    // paddingBottom: 40,
    height: 480,
  },
  cartHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  emptyText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 80,
  },
  cartContent: {
    gap: 16,
  },
  gradientContainer: {
    borderRadius: 360,
    padding: 2,
  },
  buttonText: {
    fontSize: 16,
    textTransform: "uppercase",
    // fontWeight: "bold",
    textAlign: "center",
    color: "#FD8770",
    backgroundColor: "#2E2E30",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 360,
  },
  cartCheckoutContainer: {
    // width: "100%",
    paddingVertical: 28,
    paddingBottom: 120,
    backgroundColor: "#3D3D3F",
    gap: 28,
  },
  totalText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  // ======================
});

export default CartScreen;
