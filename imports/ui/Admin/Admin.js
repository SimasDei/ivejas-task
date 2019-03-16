import React from 'react';
import { Products } from '../../api/products';

import AdminHeader from './AdminHeader';
import AddProduct from '../Products/AddProduct';
import ProductList from '../Products/ProductsList';

const Admin = () => {
  return (
    <div className="main-container">
      <AdminHeader />
      <div className="wrapper">
        <AddProduct />

        <ProductList />
      </div>
    </div>
  );
};

export default Admin;
