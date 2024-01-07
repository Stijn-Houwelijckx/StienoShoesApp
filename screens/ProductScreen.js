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
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import SizeSelector from "../components/SizeSelector";
import FilledGradientButton from "../components/FilledGradientButton";
import { useSelectedItemsContext } from "../components/SelectedItemsContext";

const ProductScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const [product, setProduct] = useState([]);

  const { addToCart, portNumber } = useSelectedItemsContext();

  const getProduct = async () => {
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

      console.log(url);
      console.log(id);

      url += id;

      console.log(url);

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();

      // console.log(json.productImg);
      if (Platform.OS == "android") {
        json.productImg = json.productImg.replace(
          "stienoshoes.ddev.site",
          `10.0.2.2:${portNumber}`
        );
      }

      // console.log(json.items);
      setProduct(json);
    } catch (error) {
      console.error(error);
    }
  };

  // Use the useFocusEffect hook to fetch product data when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      getProduct();
    }, [id]) // Include 'id' as a dependency to re-fetch data when 'id' changes
  );

  // useEffect(() => {
  //   getProduct();
  // }, []);

  // console.log(id);

  // console.log(product.price.amount);

  return (
    <LinearGradient colors={["#FCAD72", "#FF626D"]} style={styles.screen}>
      <View style={styles.imageContainer}>
        <View style={styles.backgroundCircle}></View>
        <Image
          style={[styles.popularShoeImage, { width: 297, height: 186 }]}
          source={{ uri: product.productImg }}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.shoeName}>{product.title}</Text>
        <Text style={styles.shoeColor}>{product.fullColor}</Text>
        <Text style={styles.shoePrice}>
          € {(product.price?.amount / 100)?.toFixed(2)}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.shoeDescription}>{product.productDescription}</Text>

        <View style={styles.sizesContainer}>
          <Text style={styles.sizesContainerTitle}>Select size</Text>
          <SizeSelector sizes={product.sizes} />
        </View>

        <FilledGradientButton
          buttonText="+ Add to cart"
          onPress={() => addToCart(product.id)}
        />
      </View>

      {/* <Text style={styles.text}>{(product.price.amount / 100).toFixed(2)}</Text> */}

      {/* {product.sizes?.map((size) => (
        <Text key={size} style={styles.sizeText}>
          {size}
        </Text>
      ))} */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F8F6F6",
  },
  titleContainer: {
    paddingHorizontal: 32,
    paddingTop: 36,
    height: 270,
  },
  shoeName: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 32,
  },
  shoePrice: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 32,
  },
  shoeColor: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: 16,
  },
  popularShoeImage: {
    resizeMode: "contain",
  },
  backgroundCircle: {
    backgroundColor: "#333235",
    height: 230,
    width: 230,
    borderRadius: 360,
    position: "absolute",
    left: 50,
  },
  infoContainer: {
    backgroundColor: "#29282D",
    paddingHorizontal: 16,
    paddingTop: 28,
    height: "100%",
    borderRadius: 40,
    gap: 40,
  },
  shoeDescription: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  sizesContainer: {
    gap: 8,
  },
  sizesContainerTitle: {
    fontSize: 16,
    color: "#909090",
    textTransform: "uppercase",
  },

  // ======================
});

export default ProductScreen;
