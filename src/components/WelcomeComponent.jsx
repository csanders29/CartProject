import { render } from '@testing-library/react'
import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'


function WelcomeComponent(){
    return(
        <div>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            <HeaderComponent />
            <a href="/cart" className="cart-icon"><FiShoppingCart /></a>
            <MainComponent />
            <FooterComponent />
        </div>
    )   

}

export default WelcomeComponent