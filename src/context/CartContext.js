// import React, { createContext, useState } from "react";
import React, { createContext, useState, useEffect, useContext } from "react"; // This should be the first line

// Create the Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to manage cart items

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product is already in the cart, increase its quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If product is not in the cart, add it with an initial quantity of 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate the total cost of items in the cart
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, totalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};