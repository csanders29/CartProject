import React,{Component} from 'react'
import CartItemComponent from './CartItemComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import {Link} from 'react-router-dom'

import apple from './images/apple.jpg'
import banana from './images/banana.jpeg'
import milk from './images/milk.jpg'
import cheese from './images/cheese.jpg'
import bread from './images/bread.jpg'
import {BiArrowBack} from 'react-icons/bi'

import CartDataService from '../../service/CartDataService';


class CartComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[]
        }
    }



    render(){
    return(
        <div>
            <HeaderComponent />
            
            <br></br>
            <a href="../" className="back-btn"><BiArrowBack />back</a>

            <div className="item-list">
                <CartItemComponent image={apple} name="apple" price="$1.00"/>
                <CartItemComponent image={banana} name="banana" price="$1.20" />
                <CartItemComponent image={milk} name="milk" price="$2.70"/>
                <CartItemComponent image={cheese} name="cheese" price="$1.50"/>
                <CartItemComponent image={bread} name="bread" price="$3.25"/>
                <p className="total">Total: </p>
                <a href="/checkout" className="checkout-btn">Checkout</a>
            </div>

        </div>
        
    )}
}

export default CartComponent