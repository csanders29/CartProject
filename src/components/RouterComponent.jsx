import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent.jsx'
import CartComponent from './CartComponent'
import CheckoutComponent from './CheckoutComponent'

class RouterComponent extends React.Component {
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/"><WelcomeComponent /></Route>
                        <Route path="/cart" component={CartComponent} /> 
                        <Route path="/checkout" component={CheckoutComponent} /> 
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent