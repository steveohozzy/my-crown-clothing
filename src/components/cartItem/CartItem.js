import './cartItemStyles.js';
import { CartItemContainer, ItemDetails, Name } from './cartItemStyles.js';

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem
