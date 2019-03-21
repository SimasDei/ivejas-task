import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  handleProductDelete = () => {
    Meteor.call('products.delete', this.props.product._id);
  };

  handleStorage = () => {
    const { product } = this.props;
    Meteor.call('products.storageAdd', product._id, product.storage);
  };

  handleStorageDelete = () => {
    const { product } = this.props;
    Meteor.call('products.storageDelete', product._id, product.storage);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="item">
        <h3>{product.title}</h3>
        <p className="item__paragraph">{product.description}</p>
        <p className="item__paragraph">In Storage: {product.storage}</p>
        <button
          className="button button--delete"
          onClick={this.handleProductDelete}
        >
          Delete
        </button>
        <button
          className="button button--delete"
          style={{ marginLeft: '1rem' }}
          onClick={this.handleStorage}
        >
          Add One
        </button>
        <button
          className="button button--delete"
          style={{ marginLeft: '1rem' }}
          onClick={this.handleStorageDelete}
        >
          Remove One
        </button>
      </div>
    );
  }
}

export default ProductItem;
