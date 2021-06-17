import { render } from '@testing-library/react'
import React from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import MainComponent from './MainComponent'
import {Link} from 'react-router-dom'

function WelcomeComponent(){
    return(
        <div>
            <HeaderComponent />
            <h2><Link to="/cart">Cart</Link></h2>
            <MainComponent />
            <FooterComponent />
        </div>
    )   

}

export default WelcomeComponent