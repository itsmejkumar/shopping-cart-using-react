import React, { Component } from "react";
export class CartDetails extends Component {
  state = {
    value: this.props.products,
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { value } = this.props.product;
    return value === 0 ? "0" : value;
  }

  render() {
    const { onIncrement, product, onDecrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <div
          className="row align-items-center"
          style={{ border: "1px solid grey" }}
        >
          <div className="col-sm">
            <b>{product.name}</b>
          </div>
          <div className="col-sm">
            <i>${product.price}.00</i>
          </div>
          <div className="col-sm">
            <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
          </div>
          <div className="col-sm">
            <button
              onClick={() => onIncrement(product)}
              className="btn btn-secondary btn-sm"
              value="+"
            >
              +
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => onDecrement(product)}
              className="btn btn-secondary btn-sm"
              disabled={product.value === 0 ? true : false}
              value="-"
            >
              -
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => onDelete(product.id)}
              className="btn btn-danger btn-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
