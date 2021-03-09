import React, { Component } from "react";
import "./shop.data.js";
import SHOP_DATA from "./shop.data.js";
import CollectionsPreview from "../../componenets/collection-preview/collection-preview.componenet";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othetCollectionProps }) => (
          <CollectionsPreview key={id} {...othetCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
