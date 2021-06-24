import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import {IoHomeOutline} from 'react-icons/io5'

function CheckoutComponent(){
    return(
        <div>
            <HeaderComponent />
            <br></br>
            <p>Order Complete!</p>
            <br></br>
            <p>Thanks for Shopping with Us!</p>
            <br></br>
            <a href="/" className="home-btn"><IoHomeOutline /></a>
            <FooterComponent />
        </div>
    )
}


export default CheckoutComponent