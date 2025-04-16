import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import Button from '../button/Button'
import CartItem from '../cartItem/CartItem'
import './cartDropDown.scss'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item =>
                    <CartItem cartItem={item} key={item.id} />
                )}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown
