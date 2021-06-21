import React,{Component} from 'react'
import CartItemComponent from './CartItemComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import {Link} from 'react-router-dom'
import CartDataService from '../../service/CartDataService';

class CartComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            item:[]
        }
        this.refreshItemRegistry = this.refreshItemRegistry.bind(this)
        this.deleteItemClicked = this.deleteItemClicked.bind(this)
        this.upDateItemClicked = this.upDateItemClicked.bind(this)
        this.addItemClicked = this.addItemClicked.bind(this)
    }
    
    componentDidMount() {
        this.refreshItemRegistry();
    }

    refreshItemRegistry() {
        CartDataService.findAllItems()
        .then(
            response => {
                this.setState({
                    item: response.data,
                })
            }
        )
    }

    deleteItemClicked(id, firstName, lastName) {
        console.log('Delete item Clicked')
        CartDataService.deleteItem(id)
        .then(
            response => {
                this.setState({message: `Deleted Employee: ${firstName} ${lastName}`})
                alert(this.state.message)
                this.refreshEmployeeRegistry();
            }
        )
    }



    render(){
    return(
        <div>
            <HeaderComponent />
            <h2><Link to="../">back</Link></h2>
            <div className="item-list">
                <CartItemComponent name="apple" price="$1.00"/>
                <CartItemComponent name="banana" price="$1.20" />
                <CartItemComponent name="milk" price="$2.70"/>
                <CartItemComponent name="cheese" price="$1.50"/>
                <CartItemComponent name="bread" price="$3.25"/>
                <p className="total">Total: </p>
                <a href="/checkout" className="checkout-btn"><button>Checkout</button></a>
            </div>

        </div>
        
    )}
}

export default CartComponent