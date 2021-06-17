import React from 'react'

function CartItemComponent(props){
    return(
        <div className="item">
            {/*add image*/}
            <p className="item-name">{props.name}</p>
            <p className="item-price">{props.price}</p>
            <p>Quantity: 1</p>
            <button className="cart-item-remove-btn">Remove</button>
        </div>
    )
}

export default CartItemComponent