import React from 'react';
import { Products } from '../../api/products';

import AdminHeader from './AdminHeader';
import AddProduct from '../Products/AddProduct';
import ProductList from '../Products/ProductsList';

const Admin = () => {
  return (
    <div>
      <AdminHeader />

      <AddProduct />

      <ProductList />
    </div>
  );
};

export default Admin;
