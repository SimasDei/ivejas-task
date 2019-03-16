import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Products } from '../../api/products';

import ProductItem from './ProductItem';

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
    return products.map(product => (
      <ProductItem key={product._id} product={product} />
    ));
  };

  render() {
    return (
      <div className="product-list">
        <h4 className="item__header">Product List</h4>
        <div>{this.renderProductList()}</div>
      </div>
    );
  }
}

export default ProductsList;
