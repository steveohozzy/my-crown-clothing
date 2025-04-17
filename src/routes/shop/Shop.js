import { useContext } from "react";

import './shop.scss';

import {CategoriesContext} from '../../contexts/CategoriesContext';
import ProductCard from "../../components/productCard/ProductCard";

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
  return (
    <>
        {
            Object.keys(categoriesMap).map(title => {
                return (
                    <div key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default Shop
