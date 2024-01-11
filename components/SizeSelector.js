import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SizeSelector = (props) => {
  const [value, setValue] = useState(0);

  // Create radioProps based on sizes
  const radioProps = props.sizes
    ? props.sizes.map((size, index) => ({
        label: size,
        value: index,
      }))
    : [];

  // Function triggered when a radio button is pressed
  const handleRadioButtonPress = (selectedValue) => {
    // Set the selected radio button value to the component state
    setValue(selectedValue);
    console.log("Selected Size:", props.sizes[selectedValue]);
  };

  const renderRadioButton = ({ item }) => {
    const isSelected = value === item.value; // Check if the current radio button is selected

    return (
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleRadioButtonPress(item.value)}
      >
        <LinearGradient
          colors={isSelected ? ["#FCAD72", "#FF626D"] : ["#626168", "#626168"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.radioButtonLabel}>{item.label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={radioProps}
        keyExtractor={(item) => item.value.toString()}
        numColumns={5}
        renderItem={renderRadioButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  radioButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  radioButtonLabel: {
    color: "white",
    fontSize: 16,
  },
});

export default SizeSelector;
