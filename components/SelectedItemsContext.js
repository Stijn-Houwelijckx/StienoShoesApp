import React, { createContext, useContext, useState } from "react";

// Create a context object
const SelectedItemsContext = createContext();

// Custom hook to use the context within functional components
export const useSelectedItemsContext = () => {
  return useContext(SelectedItemsContext);
};

// Provider component that wraps its children and provides the context value
export const SelectedItemsProvider = ({ children }) => {
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const portNumber = "50617"; // Set your default port number here
  // State to manage selected item IDs

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    // Check if the item ID is not already in the array
    if (!selectedItemIds.includes(itemId)) {
      // Add the item ID to the array
      setSelectedItemIds((prevIds) => [...prevIds, itemId]);
    }
  };

  // Function to clear the entire cart
  const clearCart = () => {
    // Set the selected item IDs to an empty array
    setSelectedItemIds([]);
  };

  // Context value object that includes state and functions
  const value = {
    selectedItemIds,
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
