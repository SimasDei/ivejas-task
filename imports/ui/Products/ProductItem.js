import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  handleProductDelete = () => {
    Meteor.call('products.delete', this.props.product._id);
  };
  render() {
    const { product } = this.props;
    return (
      <div>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <button onClick={this.handleProductDelete}>Delete</button>
      </div>
    );
  }
}

export default ProductItem;
