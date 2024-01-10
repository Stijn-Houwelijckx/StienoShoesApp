import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const BottomNav = ({ navigation, activeScreen }) => {
  return (
    <View style={styles.container}>
      {/* Home Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Home")}
      >
        <View
          style={[
            styles.iconContainer,
            activeScreen === "Home" && styles.active,
          ]}
        >
          <FontAwesomeIcon name="home" size={24} color="#FFF" />
        </View>
        <Text style={styles.tabLabel}>Home</Text>
      </TouchableOpacity>

      {/* Catalog Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Catalog")}
      >
        <View
          style={[
            styles.iconContainer,
            activeScreen === "Catalog" && styles.active,
          ]}
        >
          <FontAwesomeIcon name="tag" size={24} color="#FFF" />
        </View>
        <Text style={styles.tabLabel}>Catalog</Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <View
          style={[
            styles.iconContainer,
            activeScreen === "Cart" && styles.active,
          ]}
        >
          <FontAwesomeIcon name="shopping-bag" size={24} color="#FFF" />
        </View>
        <Text style={styles.tabLabel}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2E2E30",
    height: 90,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
    paddingHorizontal: 16,
    gap: 16,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 360,
  },
  active: {
    backgroundColor: "hsla(0, 0%, 40%, 0.5)",
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 16,
    color: "#FFF",
  },
});

export default BottomNav;
