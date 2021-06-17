import React from 'react'
import CartItemComponent from './CartItemComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import {Link} from 'react-router-dom'

function CartComponent(){
    return(
        <div>
            <HeaderComponent />
            <h2><Link to="../">back</Link></h2>
            <div className="item-list">
                <CartItemComponent name="apple" price="$1.00"/>
                <CartItemComponent name="banana" price="$1.20" />
                <CartItemComponent name="milk" price="$2.70"/>
                <CartItemComponent name="cheese" price="$1.50"/>
                <CartItemComponent name="bread" price="$3.25"/>
                <p className="total">Total: </p>
                <a href="/checkout" className="checkout-btn"><button>Checkout</button></a>
            </div>

        </div>
        
    )
}

export default CartComponent