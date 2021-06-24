import React from 'react'
import apple from './images/apple.jpg'
import banana from './images/banana.jpeg'
import milk from './images/milk.jpg'
import cheese from './images/cheese.jpg'
import bread from './images/bread.jpg'
import {CgAddR} from 'react-icons/cg'

function ItemComponent(props){
    return(
        <div className="item">
            {/*add image*/}
            <img className="item-image" src={props.image} alt="." />
            <p className="item-name">{props.name}</p>
            <p className="item-price">{props.price}</p>
            {/* <button className="item-add-btn" onClick={addToCart}><CgAddR /></button> */}
            <a className="item-add-btn" onClick={addToCart}><CgAddR /></a>

        </div>
    )
}

function addToCart(){
    alert("Item added to cart!")
}

export default ItemComponent