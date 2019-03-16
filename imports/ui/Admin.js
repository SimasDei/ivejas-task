import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Products } from '../api/products';

import ProductList from './ProductsList';

export class Admin extends Component {
  handleLogout = () => {
    Accounts.logout();
    this.props.history.push('/');
  };
  handleAddProduct = e => {
    e.preventDefault();
    const product = {
      title: this.refs.title.value.trim()
    };
    if (product) {
      Products.insert(product);
      this.refs.title.value = '';
    }
  };
  render() {
    return (
      <div>
        <p>Admin Page</p>
        <button onClick={this.handleLogout}>Logout</button>
        <p>Add Product</p>
        <form onSubmit={this.handleAddProduct}>
          <input type="text" ref="title" placeholder="Product Title" />
          <button>Add Product</button>
        </form>
        <ProductList />
      </div>
    );
  }
}

export default Admin;
