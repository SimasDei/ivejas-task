import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Products } from '../api/products';

export class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.productsTracker = Tracker.autorun(() => {
      Meteor.subscribe('products');
      const products = Products.find().fetch();
      this.setState({ products });
    });
  }
  componentWillUnmount() {
    this.productsTracker.stop();
  }

  renderProductList = () => {
    const { products } = this.state;
    return products.map(product => <p key={product._id}>{product.title}</p>);
  };

  render() {
    return (
      <div>
        <p>Product List</p>
        <div>{this.renderProductList()}</div>
      </div>
    );
  }
}

export default ProductsList;
