import React from 'react'
import logo from './images/logo.png'

function HeaderComponent(){
    return(
        <div>
            
            <header className="header">
            <img className="logo" src={logo} alt="." />
                Grocery Shop</header>
        </div>
        
    )

}

export default HeaderComponent