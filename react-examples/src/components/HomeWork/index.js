import React, { Component } from "react";
import "./styles.css";

const products = [
  { name: "Papier toaletowy", price: "4.90", id: "1ab" },
  { name: "Mleko", price: "20.90", id: "2cde" },
  { name: "Płyn antybakteryjny", price: "100,00", id: "3asda" },
  { name: "Maseczka anty koronawirusowa", price: "30,00", id: "4asdaasd" },
];

class ShopCart extends Component {
  state = {
    productsItemsList: products,
    shopCartItemsList: [],
  };

  addProductToShopCart = (event) => {
    const { productId } = event.target.dataset;
    const productItemIndex = this.state.productsItemsList.findIndex(
      (product) => product.id === productId
    );

    if (productItemIndex > -1) {
      this.setState((prevState) => {
        const newProductsItemsList = [...prevState.productsItemsList];
        const newShopCartItemsList = [...prevState.shopCartItemsList];

        newShopCartItemsList.push(newProductsItemsList[productItemIndex]);
        newProductsItemsList.splice(productItemIndex, 1);

        return {
          productsItemsList: newProductsItemsList,
          shopCartItemsList: newShopCartItemsList,
        };
      });
    }
  };

  removeProductFromShopCart = (event) => {
    const { productId } = event.target.dataset;
    const productItemIndex = this.state.shopCartItemsList.findIndex(
      (product) => product.id === productId
    );

    if (productItemIndex > -1) {
      this.setState((prevState) => {
        const newProductsItemsList = [...prevState.productsItemsList];
        const newShopCartItemsList = [...prevState.shopCartItemsList];

        newProductsItemsList.push(newShopCartItemsList[productItemIndex]);
        newShopCartItemsList.splice(productItemIndex, 1);

        return {
          productsItemsList: newProductsItemsList,
          shopCartItemsList: newShopCartItemsList,
        };
      });
    }
  };

  render() {
    return (
      <div className="shop-cart">
        <div>
          <h3>Poroducts list</h3>
          {this.state.productsItemsList.map((productItem) => (
            <ProductItem
              key={productItem.id}
              {...productItem}
              buttonLabel="Dodaj do koszyka"
              handleClick={this.addProductToShopCart}
            />
          ))}
        </div>
        <div>
          <h3>ShopCart list</h3>
          {this.state.shopCartItemsList.map((shopCartItem) => (
            <ProductItem
              key={shopCartItem.id}
              {...shopCartItem}
              buttonLabel="Usuń z koszyka"
              handleClick={this.removeProductFromShopCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopCart;

const ProductItem = ({ id, name, price, buttonLabel, handleClick }) => (
  <div>
    <h4>{name}</h4>
    <p>{price}</p>
    <div>
      <button onClick={handleClick} data-product-id={id}>
        {buttonLabel}
      </button>
    </div>
  </div>
);
