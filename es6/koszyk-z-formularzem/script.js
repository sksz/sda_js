class ProductForm {
  constructor() {
    this.formNode = $('#productForm');
    this.formBtnNode = $('#productFormSubmitBtn');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formBtnNode.on('click', this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.formNode.serializeArray();
    console.log(formData);
  }
}

class ShopCart {
  constructor() {
    this.products = [];
    this.productsNode = $(".products-list");
  }

  addItemToCart(product) {
    this.products.push(product);
    const newProductNode = product.createProductNode();
    this.productsNode.append(newProductNode);
  }

  removeItemFromCart() {
    
  }
}

class Product {
  constructor(type, name, price) {
    this.type = type;
    this.name = name;
    this.price = price;
  }

  createProductNode() {
    this.productNode = $(`
      <li>
        <h4>${this.name}</h4>
        <h5>${this.type}</h5>
        <p>${this.price} PLN</p>
      </li>
    `);

    return this.productNode;
  }
}


const one = new Product("Toy", "LEGO", 90);
const two = new Product("Toy", "TALISMAN", 120);
const three = new Product("Phone", "IPHONE", 2000);
const four = new Product("Phone", "NOKIA", 300);

const newShopCart = new ShopCart();

newShopCart.addItemToCart(one);
newShopCart.addItemToCart(two);
newShopCart.addItemToCart(three);
newShopCart.addItemToCart(four);

const productForm = new ProductForm();