import React from 'react'
import ItemComponent from './ItemComponent'
import {Link} from 'react-router-dom'

function MainComponent(){
    return(
        <div className="item-list">
            <ItemComponent name="apple" price="$1.00"/>
            <ItemComponent name="banana" price="$1.20" />
            <ItemComponent name="milk" price="$2.70"/>
            <ItemComponent name="cheese" price="$1.50"/>
            <ItemComponent name="bread" price="$3.25"/>
        </div>
    )

}

export default MainComponent