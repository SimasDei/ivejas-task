import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class AddProduct extends Component {
  handleAddProduct = e => {
    e.preventDefault();
    const title = this.refs.title.value.trim();
    if (title) {
      Meteor.call('products.insert', title);
      this.refs.title.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddProduct}>
          <input type="text" ref="title" placeholder="Product Title" />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
