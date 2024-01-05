import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CatalogScreen from "./screens/CatalogScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  // const [logo, setLogo] = useState([]);

  // const getLogo = async () => {
  //   try {
  //     let url;
  //     if (Platform.OS === "android") {
  //       url = "http://10.0.2.2:49332/api/header/";
  //     } else {
  //       url = "http://craft-news-b.ddev.site/api/header/";
  //     }

  //     const response = await fetch(url, {
  //       method: "GET",
  //     });
  //     const jsonData = await response.json();

  //     console.log("API Response:", jsonData);

  //     // Check if 'items' array exists and has length > 0
  //     if (jsonData.items && jsonData.items.length > 0) {
  //       let logoUrl = jsonData.items[0].logo;

  //       console.log("Logo URL before:", logoUrl);

  //       // Check if logoUrl is defined before replacing
  //       if (Platform.OS === "android" && logoUrl) {
  //         logoUrl = logoUrl.replace("stienoshoes.ddev.site", "10.0.2.2:49332");
  //       }

  //       console.log("Logo URL after:", logoUrl);

  //       setLogo([{ logo: logoUrl }]);
  //     } else {
  //       console.error("No items found in the response.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getLogo();
  // }, []);

  // console.log(logo);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home stack */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#3D3D3F" },
            headerTintColor: "#fff",
            headerTitleAlign: "left",
            animation: "none",
          }}
        />

        {/* Catalog stack */}
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{
            // title: "My home",
            headerStyle: { backgroundColor: "#3D3D3F" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "left",
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),

            headerBackVisible: false,
            animation: "none",
          }}
        />

        {/* Product stack */}
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "#3D3D3F" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "left",
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 0 }}
                onPress={() => {
                  navigation.navigate("Catalog");
                }}
              >
                <Icon name="chevron-back-outline" size={24} color="#fff" />
              </TouchableOpacity>
            ),
            animation: "none",
          })}
        />

        {/* Cart stack */}
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            // title: "My home",
            headerStyle: { backgroundColor: "#3D3D3F" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "left",

            headerBackVisible: false,
            animation: "none",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
