import React from 'react';
import { Products } from '../../api/products';
import { Clients } from '../../api/clients';

import AdminHeader from './AdminHeader';
import AddProduct from '../Products/AddProduct';
import ProductList from '../Products/ProductsList';
import AddClient from '../Clients/AddClient';
import ClientList from '../Clients/ClientList';

const Admin = () => {
  return (
    <div className="main-container">
      <AdminHeader />
      <div className="wrapper">
        <AddProduct />
        <ProductList />
        <AddClient />
        <ClientList />
      </div>
    </div>
  );
};

export default Admin;
