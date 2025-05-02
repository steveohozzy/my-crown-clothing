import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from "react";
import {CategoriesContext} from '../../contexts/CategoriesContext';

import ProductCard from '../../components/productCard/ProductCard';
import { CategoryContainer, CategoryTitle } from './categoryStyles';

const Category = () => {
    const { category }  = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
  return (
    <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            {
            products &&  products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    )
                })
            }
        </CategoryContainer>
    </>
  )
}

export default Category
