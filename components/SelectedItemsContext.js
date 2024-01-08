import React, { createContext, useContext, useState } from "react";

// Create a context object
const SelectedItemsContext = createContext();

// Custom hook to use the context within functional components
export const useSelectedItemsContext = () => {
  return useContext(SelectedItemsContext);
};

// Provider component that wraps its children and provides the context value
export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const portNumber = "56269"; // Set your default port number here
  // State to manage selected item IDs

  // Function to add an item to the cart
  const addToCart = (itemId, newCount) => {
    // Check if the item ID is not already in the array
    // console.log("Adding to cart:", itemId);

    const existingItem = selectedItems.find((item) => item.itemId === itemId);

    // console.log("Existing items:", selectedItems);
    // console.log("Found existing item for itemId", itemId, ":", existingItem);

    if (existingItem) {
      // If the item is already in the cart, update its count
      console.log("Item already in cart, updating count");
      setSelectedItems((prevItems) =>
        prevItems.map((item) =>
          item.itemId === itemId
            ? {
                ...item,
                count: newCount === undefined ? item.count + 1 : newCount,
              }
            : item
        )
      );
    } else {
      // If the item is not in the cart, add it with count 1
      // console.log("Item not in cart, adding with count 1");
      setSelectedItems((prevItems) => [
        ...prevItems,
        { itemId: itemId, count: 1 },
      ]);
    }
  };

  // Function to clear the entire cart
  const clearCart = () => {
    // Set the selected item IDs to an empty array
    setSelectedItems([]);
  };

  // Context value object that includes state and functions
  const value = {
    selectedItems,
    addToCart,
    clearCart,
    portNumber, // Include portNumber in the context value
  };

  // Provide the context value to the children components
  return (
    <SelectedItemsContext.Provider value={value}>
      {children}
    </SelectedItemsContext.Provider>
  );
};
