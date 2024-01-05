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
import CatalogItem from "../components/CatalogItem";

const CatalogScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Catalog.</Text>
      <View style={styles.catalogContainer}>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 16,
  },
  catalogContainer: {
    paddingHorizontal: 16,
  },

  // ======================
});

export default CatalogScreen;
