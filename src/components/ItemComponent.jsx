import React from 'react'
import apple from './images/apple.jpg'
import banana from './images/banana.jpeg'
import milk from './images/milk.jpg'
import cheese from './images/cheese.jpg'
import bread from './images/bread.jpg'
import {CgAddR} from 'react-icons/cg'


function ItemComponent(props){
   
    function add()
    {   
        if(props.itemNum===props.inStore)
            alert("max of item in store");
        else   
            props.upDateItemClicked(props.id, props.name, props.price, props.inStore, props.buy, props.itemNum);
            
    }
    
   let image;
    if(props.name==="apple")
        image=apple;
    else if(props.name==="banana")
        image=banana;
    else if(props.name==="milk")
        image=milk;
    else if(props.name==="cheese")
        image=cheese;
    else if(props.name==="bread")
       image=bread;
    
    return(
        <div className="item">
            {/*add image*/}
            <img src={image} alt="new"/>
            <p className="item-name">{props.name}</p>
            <p className="item-price">${props.price}</p>
            <a className="item-add-btn" onClick={add}><CgAddR /></a>
            
        </div>
    )
}

export default ItemComponent