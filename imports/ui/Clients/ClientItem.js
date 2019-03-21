import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Products } from '../../api/products';

export class ClientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.productsTracker = Tracker.autorun(() => {
      Meteor.subscribe('products');
      const products = Products.find().fetch();
      this.setState({ products });
    });
  }
  componentWillUnmount() {
    this.productsTracker.stop();
  }

  handleClientDelete = () => {
    Meteor.call('clients.delete', this.props.client._id);
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
          console.log(optionState);
        }}
      >
        <select
          placeholder="Order a Product"
          name="products"
          id="products"
          className="productSelect"
          onChange={e => (optionState = e.target.value)}
        >
          {/* <option selected={true} disabled="disabled">
            Order a Product
          </option> */}
          <option hidden={true}>Order a Product</option>
          {options}
        </select>
        <button className="button">Order</button>
      </form>
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.refs.option.value);
  };

  render() {
    const { client } = this.props;
    return (
      <div className="item">
        <h3>{client.name}</h3>
        <p className="item__paragraph">{client.description}</p>
        <h4>Order</h4>
        {this.handleProductList()}
        <button
          className="button button--delete"
          onClick={this.handleClientDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ClientItem;
