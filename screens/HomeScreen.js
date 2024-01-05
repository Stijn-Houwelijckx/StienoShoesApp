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
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BottomNav from "../components/BottomNav";
import PopularCard from "../components/PopularCard";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      //10.0.2.2:60628
      //http://stienoshoes.ddev.site/
      let url;
      if (Platform.OS == "android") {
        //ddev describe om port number te weten te komen
        url = "http://10.0.2.2:52951/api/catalog/";
      } else {
        url = "http://stienoshoes.ddev.site//api/catalog/";
      }

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();

      console.log(json.items);
      setProducts(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  const replaceImageUrl = (imageUrl) => {
    if (Platform.OS == "android") {
      imageUrl = imageUrl.replace("stienoshoes.ddev.site", "10.0.2.2:52951");
    }
    console.log(imageUrl);
    return imageUrl;
  };

  return (
    <LinearGradient colors={["#FCAD72", "#FF626D"]} style={styles.screen}>
      <View style={styles.popularSection}>
        <Text style={styles.title}>Popular Shoes.</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularCardsContainer}
        >
          {products.slice(0, 3).map((product, index) => (
            <PopularCard
              key={index}
              shoeName={product.title}
              shoePrice={(product.price.amount / 100).toFixed(2)}
              shoeImage={replaceImageUrl(product.productImg)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.title}>Recently Viewed.</Text>
      </View>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen={"Home"} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 80,
    // justifyContent: "center",
    // backgroundColor: "#F8F6F6",
  },
  popularSection: {
    paddingTop: 28,
    gap: 20,
    // paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 16,
  },
  popularCardsContainer: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 16,
  },
  recentSection: {
    // width: "100%",
    height: "100%",
    backgroundColor: "#3D3D3F",
    paddingTop: 28,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  // ======================
});

export default HomeScreen;
