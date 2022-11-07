import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context'; 
import './dropdown.scss';
import Button from '../button/buttons';
import CartItem from '../cart-item/cart-item';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
                ) : (
                <span className='empty-message'>Cart is empty</span>
                )
            }
        </div>
            <Button>CHECKOUT</Button>
            
        </div>
    )
}

export default CartDropdown;