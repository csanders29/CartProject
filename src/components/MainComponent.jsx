import React from 'react'
import ItemComponent from './ItemComponent'
import {Link} from 'react-router-dom'
import apple from './images/apple.jpg'
import banana from './images/banana.jpeg'
import milk from './images/milk.jpg'
import cheese from './images/cheese.jpg'
import bread from './images/bread.jpg'

function MainComponent(){
    return(
        <div className="item-list">
            <ItemComponent image={apple} name="apple" price="$1.00"/>
            <ItemComponent image={banana} name="banana" price="$1.20" />
            <ItemComponent image={milk} name="milk" price="$2.70"/>
            <ItemComponent image={cheese} name="cheese" price="$1.50"/>
            <ItemComponent image={bread} name="bread" price="$3.25"/>
        </div>
    )

}

export default MainComponent