import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
// import { Dimensions } from "react-native";

export default function App() {
  // const windowWidth = Dimensions.get("window").width;
  // const windowHeight = Dimensions.get("window").height;

  // console.log("Height: " + windowHeight + " & Width: " + windowWidth);

  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      //10.0.2.2:60856
      //http://stienoshoes.ddev.site
      let url;
      if (Platform.OS == "android") {
        //ddev describe om port number te weten te komen
        url = "http://10.0.2.2:60856/api/catalog/";
      } else {
        url = "http://stienoshoes.ddev.site/api/catalog/";
      }

      const response = await fetch(url, {
        method: "GET",
      });
      const json = await response.json();
      // console.log(json.items);
      setProduct(json.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products[0]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
