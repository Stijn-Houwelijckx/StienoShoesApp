import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BottomNav from "../components/BottomNav";
import CatalogItem from "../components/CatalogItem";
import { useSelectedItemsContext } from "../components/SelectedItemsContext";

const CatalogScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending
  const { addToCart, portNumber } = useSelectedItemsContext();

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

  const sortProducts = () => {
    // Create a copy of the products array to avoid modifying the original array
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = a.price.amount;
      const priceB = b.price.amount;

      // Determine the sorting order based on the sortOrder state
      // If sortOrder is "asc", sort in ascending order, otherwise, sort in descending order
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    console.log(sortedProducts[0].price.amount);

    // Update the state with the sorted products array
    setProducts(sortedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []); // Fetch products only once when the component mounts

  // console.log(products);

  return (
    <View style={styles.screen}>
      <LinearGradient colors={["#FCAD72", "#FF626D"]} style={styles.background}>
        <Text style={styles.title}>Catalog.</Text>
        <View style={styles.sortBtn}>
          <Button
            title={`Sort ${
              sortOrder === "asc" ? "Low to High" : "High to Low"
            }`}
            onPress={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              sortProducts();
            }}
          />
        </View>
      </LinearGradient>

      <FlatList
        style={styles.catalogContainer}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (Platform.OS == "android") {
            item.productImg = item.productImg.replace(
              "stienoshoes.ddev.site",
              `10.0.2.2:${portNumber}`
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
    backgroundColor: "#0F0F0F",
  },
  background: {
    paddingTop: 28,
    height: "25%",
    marginBottom: "-27%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 16,
  },
  sortBtn: {
    marginRight: 16,
    borderRadius: 10,
    overflow: "hidden",
    height: 35,
  },
  catalogContainer: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },

  // ======================
});

export default CatalogScreen;
