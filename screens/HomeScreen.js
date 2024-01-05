// const [products, setProduct] = useState([]);

// const getProducts = async () => {
//   try {
//     //10.0.2.2:60856
//     //http://stienoshoes.ddev.site
//     let url;
//     if (Platform.OS == "android") {
//       //ddev describe om port number te weten te komen
//       url = "http://10.0.2.2:60856/api/catalog/";
//     } else {
//       url = "http://stienoshoes.ddev.site/api/catalog/";
//     }

//     const response = await fetch(url, {
//       method: "GET",
//     });
//     const json = await response.json();
//     // console.log(json.items);
//     setProduct(json.items);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
//   getProducts();
// }, []);

// console.log(products[0]);

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

import BottomNav from "../components/BottomNav";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/* Your screen content */}
      <Text>This is the Home Screen</Text>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen={"Home"} />
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

export default HomeScreen;
