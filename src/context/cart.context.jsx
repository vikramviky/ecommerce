import React from "react";
import { createContext, useState, useEffect } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, SetCartCount] = useState(0);

    useEffect(()=> {
        const updatedCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0)
        SetCartCount(updatedCartCount);
    },[cartItems])
  
    const addItemToCart = (product) =>
      setCartItems(addCartItem(cartItems, product));
  
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
  
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };