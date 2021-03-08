import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./componenets/pages/homemage.component";
import ShopPage from "./componenets/pages/shop/shop.componenet";
import Header from "./componenets/header/header.component";
import SignInAndSignUpPage from "./componenets/pages/sign-in-and-sign-up/sign-in-and-sign-up.componenet";
import { auth } from "./componenets/firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null; 

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  } 

  render() {
    return (
      <div>
        <Header currentUser ={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
