import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import Button from '../button/Button'
import './productCard.scss'

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart} = useContext(CartContext);

    const addItemToCartHandler = () => {
        addItemToCart(product)
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button onClick={addItemToCartHandler} buttonType="inverted">Add to cart</Button>
        </div>
    )
}

export default ProductCard
