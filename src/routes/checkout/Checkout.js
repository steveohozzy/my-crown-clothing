import { useContext } from 'react'

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import { CartContext } from '../../contexts/CartContext'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkoutStyles';

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item =>
                <CheckoutItem checkoutItem={item} key={item.id} />
            )}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout
