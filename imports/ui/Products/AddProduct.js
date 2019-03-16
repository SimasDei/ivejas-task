import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class AddProduct extends Component {
  handleAddProduct = e => {
    e.preventDefault();
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();
    if (title) {
      Meteor.call('products.insert', title, description);
      this.refs.title.value = '';
      this.refs.description.value = '';
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddProduct}>
          <input type="text" ref="title" placeholder="Product Title" />
          <input
            type="text"
            ref="description"
            placeholder="Product Description"
          />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
