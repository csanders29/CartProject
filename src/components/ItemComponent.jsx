import React from 'react'

function ItemComponent(props){
    return(
        <div className="item">
            {/*add image*/}
            <p className="item-name">{props.name}</p>
            <p className="item-price">{props.price}</p>
            <button className="item-add-btn">Add to cart</button>
        </div>
    )
}

export default ItemComponent