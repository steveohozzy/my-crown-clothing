import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from "../../store/categories/categoriesSelector";
import ProductCard from '../../components/productCard/ProductCard';
import { CategoryContainer, CategoryTitle } from './categoryStyles';

const Category = () => {
    const { category }  = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
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
                        <ProductCard product={product} key={product.id} />
                    )
                })
            }
        </CategoryContainer>
    </>
  )
}

export default Category
