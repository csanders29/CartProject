import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

function CheckoutComponent(){
    return(
        <div>
            <HeaderComponent />
            <p>Order Complete!</p>
            <br></br>
            <p>Thanks for Shopping with Us!</p>
            <br></br>
            <a href="/" className="home-btn"><button>Back Home</button></a>
            <FooterComponent />
        </div>
    )
}


export default CheckoutComponent