class ProductForm {
  constructor() {
    this.formNode = $('#productForm');
    this.formBtnNode = $('#productFormSubmitBtn');

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formBtnNode.on('click', this.handleSubmit)
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
  }

  addItemToCart(product) {
    this.products.push(product);
    const newProductNode = product.createProductNode();
    $(".products-list").append(newProductNode);
  }

  removeItemFromCart(index) {
    this.products.splice(index, 1);
  }

  checkProducts() {
    this.products.forEach(product => {
      product.checkMyfunctionality();
    });
  }
}

class Product {
  constructor(type, name, price) {
    this.type = type;
    this.name = name;
    this.price = price;
  }

  createProductNode() {
    return $(`
      <li>
        <h4>${this.name}</h4>
        <h5>${this.type}</h5>
        <p>${this.price} PLN</p>
      </li>
    `);
  }
}

class Toy extends Product {
  constructor(type, name, price, sound) {
    super(type, name, price);
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }

  checkMyfunctionality() {
    this.makeSound();
  }
}

class Phone extends Product {
  constructor(type, name, price, ringtone) {
    super(type, name, price);
    this.ringtone = ringtone;
  }

  makeCall() {
    console.log(this.ringtone);
  }

  checkMyfunctionality() {
    this.makeCall();
  }
}

const newShopCart = new ShopCart();

const one = new Toy("Toy", "LEGO", 90, "yeah");
const two = new Toy("Toy", "TALISMAN", 120, "heeh");
const three = new Phone("Phone", "IPHONE", 2000, "bleah");
const four = new Phone("Phone", "NOKIA", 300, "buuuz");

newShopCart.addItemToCart(one);
newShopCart.addItemToCart(two);
newShopCart.addItemToCart(three);
newShopCart.addItemToCart(four);

newShopCart.checkProducts();

const productForm = new ProductForm();