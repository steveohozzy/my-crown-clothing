import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './checkoutItemStyles';


const CheckoutItem = ({checkoutItem}) => {
    const {name, quantity, imageUrl, price} = checkoutItem;

    const {removeItemFromCart, addItemToCart, deleteItemFromCart} = useContext(CartContext);
    
    const ReduceQuantityHandler = () => {
        removeItemFromCart(checkoutItem)
    }

    const IncreaseQuantityHandler = () => {
        addItemToCart(checkoutItem)
    }

    const DeleteItemHandler = () => {
        deleteItemFromCart(checkoutItem)
    }
        
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={ReduceQuantityHandler}>
                    &#10094;
                </Arrow>
                <Value>
                    {quantity}
                </Value>
                <Arrow onClick={IncreaseQuantityHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={DeleteItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
