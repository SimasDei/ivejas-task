import React, { Component } from 'react';
import { Products } from '../../api/products';

import AdminHeader from './AdminHeader';
import AddProduct from '../Products/AddProduct';
import ProductList from '../Products/ProductsList';

export class Admin extends Component {
  render() {
    return (
      <div>
        <AdminHeader />

        <AddProduct />

        <ProductList />
      </div>
    );
  }
}

export default Admin;
