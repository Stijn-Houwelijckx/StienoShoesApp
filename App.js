import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import CatalogScreen from "./screens/CatalogScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home stack */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title: "My home",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
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
            headerStyle: { backgroundColor: "#f4511e" },
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
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "left",
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 0 }} // Adjust the margin as needed
                onPress={() => {
                  navigation.navigate("Catalog"); // Navigate to the Catalog screen
                }}
              >
                <Icon name="chevron-back-outline" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />

        {/* Cart stack */}
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            // title: "My home",
            headerStyle: { backgroundColor: "#f4511e" },
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
