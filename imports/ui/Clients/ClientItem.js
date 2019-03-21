import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Products } from '../../api/products';
import { Clients } from '../../api/clients';

export class ClientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      orders: []
    };
  }

  componentDidMount() {
    this.productsTracker = Tracker.autorun(() => {
      Meteor.subscribe('products');
      const products = Products.find().fetch();
      this.setState({ products });
    });
    this.clientsTracker = Tracker.autorun(() => {
      Meteor.subscribe('clients');
      const client = Clients.find({ _id: this.props.client._id }).fetch();
      const orders = client[0].orders;
      if (orders) {
        this.setState({ orders });
      }
    });
  }
  componentWillUnmount() {
    this.productsTracker.stop();
    this.clientsTracker.stop();
  }

  handleClientDelete = () => {
    Meteor.call('clients.delete', this.props.client._id);
  };

  handleOrderList = () => {
    const { orders } = this.state;
    console.log(orders);
    return orders.map(order => (
      <li key={order.id}>
        <p>{order.title}</p>
      </li>
    ));
  };

  handleProductList = () => {
    const { products } = this.state;
    let optionState = '';
    const options = products.map(product => (
      <option
        key={product._id}
        className="productOption"
        value={product._id}
        ref="option"
      >
        Title: {product.title} In Storage: {product.storage}
      </option>
    ));

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmit(optionState);
        }}
      >
        <select
          placeholder="Order a Product"
          name="products"
          id="products"
          className="productSelect"
          onChange={e => (optionState = e.target.value)}
        >
          <option hidden={true}>Order a Product</option>
          {options}
        </select>
        <button className="button">Order</button>
      </form>
    );
  };

  handleSubmit = productId => {
    if (productId) {
      const product = Products.findOne(productId);
      Meteor.call('products.storageDelete', product._id, product.storage);
      Meteor.call('clients.addOrder', product, this.props.client._id);
    }
    console.log(this.props.client);
  };

  render() {
    const { client } = this.props;
    return (
      <div className="item">
        <h3>{client.name}</h3>
        <p className="item__paragraph">{client.description}</p>
        <h4>Order</h4>
        {this.handleProductList()}
        <h3>Order List</h3>
        <ul>{this.handleOrderList()}</ul>
        <button
          className="button button--delete"
          onClick={this.handleClientDelete}
        >
          Delete Client
        </button>
      </div>
    );
  }
}

export default ClientItem;
