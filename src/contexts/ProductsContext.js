import { createContext, useState } from "react"
import PRODUCTS from '../shopData.json'

// as the actual value you want to access
export const ProductsContext = createContext({
    products :[]
})

export const ProductsProvider = ({children}) => {
    const [products, setPtoducts] = useState(PRODUCTS);
    const value = { products };
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}