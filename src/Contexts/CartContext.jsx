import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(i => i.name === item.name);
            if (itemExists) {
                return prevItems.map(i =>
                    i.name === item.name
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prevItems, item];
        });
    };
    
    const increaseQuantity = (name) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (itemName) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map(i =>
                i.name === itemName
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
            );
            return updatedItems.filter(i => i.quantity > 0);
        });
    };

    const removeFromCart = (itemName) => {
        setCartItems((prevItems) => prevItems.filter(i => i.name !== itemName));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseQuantity, increaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};
