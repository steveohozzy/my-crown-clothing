import { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import Button, { BUTTON_TYPE_CLASSES } from '../button/Button'
import { Footer, Name, Price, ProductCardContainer } from './productCardStyles';


const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart} = useContext(CartContext);

    const addItemToCartHandler = () => {
        addItemToCart(product)
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>

            <Button onClick={addItemToCartHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard
