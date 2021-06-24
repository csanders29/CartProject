import React,{Component} from 'react'
import CartItemComponent from './CartItemComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import {Link} from 'react-router-dom'
import CartDataService from '../service/CartDataService';
import {BiArrowBack} from 'react-icons/bi'

class CartComponent extends Component{
    constructor(props){
        super(props);
        this.state={ 
            item:[],
        };
        this.refreshItemRegistry = this.refreshItemRegistry.bind(this);
        this.upDateItemClicked= this.upDateItemClicked.bind(this);
        this.totalSale= this.totalSale.bind(this);
    }
    
    componentDidMount() {
        this.refreshItemRegistry();
    }

    refreshItemRegistry() {
        CartDataService.findAllItems().then(
            response => {this.setState({item: response.data,})}
        )
    }

    totalSale()
    {
        let sum=0;
        for( let i = 0 ; i<this.state.item.length;i++ )
        {
            sum=sum+(this.state.item[i].price*this.state.item[i].itemNum);
        }       

        return sum.toFixed(2);
    }

    upDateItemClicked(id,name,price,inStore, buy, itemNum) {
        alert("item has been remove");
        let item = {
            id: id,
            name: name,
            price:price,
            inStore: inStore,
            buy: buy,
            itemNum : itemNum-1
        }
        CartDataService.updateItem(item)//.then(() => this.props.history.push('/EmployeeRegistry'))
        window.location.reload();
    }

    render(){
         const itemList= this.state.item.map(thing => <CartItemComponent 
             id={thing.id} name={thing.name} itemNum={thing.itemNum} buy={this.buy}
                 price={thing.price}  inStore={thing.inStore} upDateItemClicked={this.upDateItemClicked}/>); 
            
    return(
        <div>
            <HeaderComponent />
            <br/><br/>
            <a href="../" className="back-btn"><BiArrowBack />back</a>
            <div className="item-list">
                {itemList}
                <p className="total">Total: $ {this.totalSale()}</p>
                <a href="/checkout" className="checkout-btn">Checkout</a>
            </div>       
        </div>
        
    )}
}

export default CartComponent