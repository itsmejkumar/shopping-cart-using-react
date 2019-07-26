import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "G-Shock",
        brand: "Casio",
        price: 450.0,
        rating: 4.9,
        value: 0,
        like: 0
      },
      {
        id: 2,
        name: "Skime",
        brand: "Skime Inc.,",
        price: 250.0,
        rating: 3.9,
        value: 0,
        like: 0
      },
      {
        id: 3,
        name: "FastTrack",
        brand: "Tata",
        price: 350.0,
        rating: 3.5,
        value: 0,
        like: 0
      },
      {
        id: 4,
        name: "Titan",
        brand: "Tata",
        price: 550.0,
        rating: 4.0,
        value: 0,
        like: 0
      },
      {
        id: 5,
        name: "Hubolt Blue",
        brand: "Hubolt",
        price: 4550.0,
        rating: 4.5,
        value: 0,
        like: 0
      },
      {
        id: 6,
        name: "Sonata",
        brand: "Tata",
        price: 650.0,
        rating: 2.8,
        value: 0,
        like: 0
      }
    ]
  };

  handleDelete = productID => {
    const products = this.state.products.filter(p => p.id !== productID);
    this.setState({ products });
  };

  handleIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    this.setState({ products });
    //    console.log(this.state.products);
  };

  handleDecrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value === 0
      ? (products[index].value = 0)
      : products[index].value--;
    this.setState({ products });
    //    console.log(this.state.products);
  };

  handleReset = () => {
    const products = this.state.products.map(p => {
      p.value = 0;
      return p;
    });
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <NavBar
          totalCount={this.state.products.filter(p => p.value > 0).length}
        />
        <main className="container">
          <ShoppingCart
            products={this.state.products}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
