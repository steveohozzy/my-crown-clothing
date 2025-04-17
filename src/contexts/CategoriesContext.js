import { createContext, useState, useEffect } from "react"
import { getCatgoriesAndDocuments } from "../utils/firebase/firebase.utils"

// import SHOP_DATA from '../shopData'

// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCatgoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])
    // to add to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
