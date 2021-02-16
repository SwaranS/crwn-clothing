import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./componenets/pages/homemage.component";
import ShopPage from "./componenets/pages/shop/shop.componenet";
import Header from "./componenets/header/header.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
