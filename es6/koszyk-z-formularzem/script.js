class ProductForm {
  constructor(shopCart) {
    this.shopCart = shopCart;
    this.formNode = $('#productForm');
    this.formBtnNode = $('#productFormSubmitBtn');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formBtnNode.on('click', this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.formNode.serializeArray();

    const newProductData = formData.reduce((accumulator, currentInput) => {
      accumulator[currentInput.name] = accumulator.value;
    }, {});

    const { type, name, price } = newProductData;
    const newProduct = new Product(type, name, price);
    this.shopCart.addItemToCart(newProduct);
    $('input').val("");
  }
}

class ShopCart {
  constructor() {
    this.products = [];
    this.productsNode = $(".products-list");

    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.productsNode.on("click", "button", this.removeItemFromCart)
  }

  addItemToCart(product) {
    this.products.push(product);
    const newProductNode = product.createProductNode();
    this.productsNode.append(newProductNode);
  }

  removeItemFromCart(event) {
    const productId = $(event.target).data("productId");
    const productIndex = this.products.findIndex(product => product.id === productId)

    if (productIndex > -1) {
      this.products[productIndex].remove();
      this.products.splice(productIndex, 1);
    }
  }
}

class Product {
  constructor(type, name, price) {
    this.type = type;
    this.name = name;
    this.price = price;
    this.id = Date.now() + Math.random();
  }

  createProductNode() {
    this.productNode = $(`
      <li>
        <h4>${this.name}</h4>
        <h5>${this.type}</h5>
        <p>${this.price} PLN</p>
        <button data-product-id=${this.id}>Usuń produkt</button>
      </li>
    `);

    return this.productNode;
  }

  remove() {
    this.productNode.remove();
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

const productForm = new ProductForm(newShopCart);
