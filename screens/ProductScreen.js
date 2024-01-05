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

const ProductScreen = ({ navigation, route }) => {
  const { id } = route.params;

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
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

      console.log(url);
      console.log(id);

      url += id;

      console.log(url);

      const response = await fetch(url, {
        method: "GET",
      });

      const json = await response.json();

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

  // console.log(products);

  // console.log(id);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{product.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F6F6",
  },
  text: {
    // color: "red",
    fontSize: 28,
  },

  // ======================
});

export default ProductScreen;
