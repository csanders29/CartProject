import React from 'react'
import {CgRemoveR} from 'react-icons/cg'

function CartItemComponent(props){
    return(
        <div className="item">
            {/*add image*/}
            <img className="item-image" src={props.image} alt="." />
            <p className="item-name">{props.name}</p>
            <p className="item-price">{props.price}</p>
            <p>Quantity: 1</p>
            <a className="cart-item-remove-btn" onClick={removeFromCart}><CgRemoveR /></a>
        </div>
    )
}

function removeFromCart(){
    alert("Item remvoed from cart!")
}

export default CartItemComponent