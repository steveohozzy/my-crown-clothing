import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import './checkoutItem.scss';


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
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={ReduceQuantityHandler} className='arrow'>
                    &#10094;
                </div>
                <span className='value'>
                    {quantity}
                </span>
                <div onClick={IncreaseQuantityHandler} className='arrow'>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={DeleteItemHandler} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem
