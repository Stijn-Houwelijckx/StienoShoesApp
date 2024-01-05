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
import { LinearGradient } from "expo-linear-gradient";

import BottomNav from "../components/BottomNav";
import CatalogItem from "../components/CatalogItem";

const CatalogScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <LinearGradient colors={["#FCAD72", "#FF626D"]} style={styles.background}>
        <Text style={styles.title}>Catalog.</Text>
      </LinearGradient>

      {/* <Text style={styles.title}>Catalog.</Text> */}
      <View style={styles.catalogContainer}>
        <CatalogItem shoeName="FlexFit Fusion" shoePrice="200.00" />
        <CatalogItem shoeName="FlexFit Fusion" shoePrice="200.00" />
        <CatalogItem shoeName="FlexFit Fusion" shoePrice="200.00" />
      </View>

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
    gap: 52,
  },

  // ======================
});

export default CatalogScreen;
