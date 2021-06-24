import React,{Component} from 'react'
import ItemComponent from './ItemComponent'
import {Link} from 'react-router-dom'
import CartDataService from '../service/CartDataService'

class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state={item:[]};
        this.refreshItemRegistry = this.refreshItemRegistry.bind(this);
        this.upDateItemClicked=this.upDateItemClicked.bind(this);
    }
    
    componentDidMount() {
        this.refreshItemRegistry();
    }

    refreshItemRegistry() {
        CartDataService.findAllItems().then(
            response => {this.setState({item: response.data,})}
        )
    }
    
    upDateItemClicked(id,name,price,inStore, buy, itemNum) {
        alert("success add one item to the cart");
        let item = {
            id: id,
            name: name,
            price:price,
            inStore: inStore,
            buy: buy,
            itemNum : itemNum+1
        }
        CartDataService.updateItem(item)//.then(() => this.props.history.push('/EmployeeRegistry'))
        window.location.reload();
    }

    
    render(){
        const itemList= this.state.item.map(thing => <ItemComponent 
            id={thing.id} name={thing.name} itemNum={thing.itemNum} buy={this.buy}
                price={thing.price}  inStore={thing.inStore} upDateItemClicked={this.upDateItemClicked}/>);
    return(
        <div className="item-list">
            {itemList}
        </div>
    )}

}

export default MainComponent