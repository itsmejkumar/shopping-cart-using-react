import React, { Component } from "react";
import { Product } from "./Product";
export class ShoppingCart extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      products,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <button
              style={{ float: "right" }}
              onClick={onReset}
              className="btn btn-primary btn-sm m-2"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {products.map((product) => (
          <Product
            key={product.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            product={product}
          />
        ))}
      </div>
    );
  }
}
