import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/homepage/homemage.component';
import ShopPage from './pages/shop/shop.componenet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.componenet';
import Header from './componenets/header/header.component';
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import "./App.css";
import Users from "./componenets/users/user.componenet";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/users/:userId" component={Users} userId={this.state.currentUser}/>
        </Switch>
      </div>
    );
  }
}

export default App;
