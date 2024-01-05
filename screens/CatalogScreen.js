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

const CatalogScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/* Your screen content */}
      <Text>This is the Catalog Screen</Text>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeScreen={"Catalog"} />
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

export default CatalogScreen;
