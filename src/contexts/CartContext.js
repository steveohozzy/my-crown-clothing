import { createContext, useEffect, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //If found, imcrement quantity
    if(existingCartItem) {
        return (
            cartItems.map((cartItem) => 
                cartItem.id === productToAdd.id
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
            )
        )
    }

    //return new array with modified cartItems/new cart item
    return [
        ...cartItems, {...productToAdd, quantity: 1}
    ]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    //If quantity was 1 remove as it is now 0
    if(existingCartItem.quantity === 1) {
        return (
            cartItems.filter((cartItem) => 
                cartItem.id !== cartItemToRemove.id)
        )
    }

    // if quantity was more than 1 reduce quantity
    return (
        cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id
                ? {...cartItem, quantity: cartItem.quantity - 1}
                : cartItem
        )
    )
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    return (
        cartItems.filter((cartItem) => 
            cartItem.id !== cartItemToDelete.id)
    )
}

// as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartTotal: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal };
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}