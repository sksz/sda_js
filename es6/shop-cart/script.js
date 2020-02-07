class ShopCart {
  constructor() {
    this.products = [];
    this.productsListNode = $('.products-list'); // pobieramy <ul> w celu łatwego dostępu przy dodawaniu produktów do HTML-a
  }

  addItemToCart(product) {
    this.products.push(product);
    product.render(this.productsListNode); // uruchamiamy metodę render() nowego produktu, przekazując jej element this.productsListNode. Dzięki temu produkt sam dołączy się do HTML-a za pomocą metody jQuery appendTo()
  }

  removeItemFromCart(index) {
    const removedProducts = this.products.splice(index, 1); // splice() oprócz usuwania, zwraca tablicę usuniętych elementów z this.products
    if (removedProducts.length >= 0) { // sprawdzamy czy tablica nie jest pusta
      removedProducts[0].remove(); // uruchamiamy metodę remove() naszego produktu aby usunąć element z HTML-a
    }
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
    // przechowujemy nasz element LI w polu this.productNode aby mieć do niego łatwy dostęp w trakcie usuwania/dodwania z HTML-a
    this.productNode = $(`
      <li class="product">
        <h4>${this.name}</h4>
        <h5>${this.type}</h5>
        <p>${this.price} PLN</p>
      </li>
    `);
  }

  render(parent) { // @parent: selektor css
    if (parent) {
      this.productNode.appendTo(parent); // nasz element LI dołacza się do elementu HTML przekazanego jako parametr metody render()
    }
  }

  remove() {
    this.productNode.remove(); // nasz element LI usuwa się z HTML
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
newShopCart.removeItemFromCart(1);