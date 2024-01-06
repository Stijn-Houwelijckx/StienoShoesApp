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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BottomNav from "../components/BottomNav";
import CatalogItem from "../components/CatalogItem";
import { useSelectedItemsContext } from "../components/SelectedItemsContext";

const CatalogScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useSelectedItemsContext();

  const getProducts = async () => {
    try {
      //10.0.2.2:60628
      //http://stienoshoes.ddev.site/
      let url;
      if (Platform.OS == "android") {
        //ddev describe om port number te weten te komen
        url = "http://10.0.2.2:55033/api/catalog/";
      } else {
        url = "http://stienoshoes.ddev.site//api/catalog/";
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

  // const handleAddToCart = (itemId) => {
  //   // Check if the item is already in the cart
  //   if (!selectedItemIds.includes(itemId)) {
  //     // Add the item ID to the cart
  //     setSelectedItemIds((prevIds) => [...prevIds, itemId]);
  //   }
  //   // console.log(selectedItemIds);
  // };
  // console.log(selectedItemIds);

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products);

  // const replaceImageUrl = (imageUrl) => {
  //   if (Platform.OS == "android") {
  //     imageUrl = imageUrl.replace("stienoshoes.ddev.site", "10.0.2.2:52951");
  //   }
  //   console.log(imageUrl);
  //   return imageUrl;
  // };

  return (
    <View style={styles.screen}>
      <LinearGradient colors={["#FCAD72", "#FF626D"]} style={styles.background}>
        <Text style={styles.title}>Catalog.</Text>
      </LinearGradient>

      <FlatList
        style={styles.catalogContainer}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (Platform.OS == "android") {
            item.productImg = item.productImg.replace(
              "stienoshoes.ddev.site",
              "10.0.2.2:55033"
            );
          }

          // console.log(item.productImg);
          // console.log(
          //   item.title + " = €" + (item.price.amount / 100).toFixed(2)
          // );
          return (
            <CatalogItem
              id={item.id}
              shoeName={item.title}
              shoePrice={(item.price.amount / 100).toFixed(2)}
              shoeImage={item.productImg}
              navigation={navigation}
              onSelectProduct={(selectedId) => {
                navigation.navigate("Product", { id: selectedId });
              }}
              // onAddToCart={() => handleAddToCart(item.id)}
              onAddToCart={() => addToCart(item.id)}
            />
          );
        }}
      />

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen={"Catalog"} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#0F0F0F",
  },
  background: {
    paddingTop: 28,
    height: "25%",
    marginBottom: "-27%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 16,
  },
  catalogContainer: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },

  // ======================
});

export default CatalogScreen;
