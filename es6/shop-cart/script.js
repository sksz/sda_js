class ShopCart {
    constructor() {
        this.products = []

    }
    addItemToCart(product) {
        this.products.push(product);
    }

    removeItemFromCart(index) {
        this.products.splice(index, 1)
    }

    checkProducts() {
        this.products.forEach((product) => {
            if (product.checkMyfunctionality) {
                product.checkMyfunctionality();
            }
        })
    };
}

class Product {
    constructor(type, name, price) {
        this.type = type,
            this.name = name,
            this.price = price
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

const newShopCart = new ShopCart;

const one = new Toy('starwars', 'LEGO', 90, 'yeah');
const two = new Toy('coardgame', 'TALISMAN', 120, 'heeh');
const three = new Phone('smartphone', 'IPHONE', 2000, 'bleah');
const four = new Phone('old phone', 'NOKIA', 300, 'buuuz');

newShopCart.addItemToCart(one);
newShopCart.addItemToCart(two);
newShopCart.addItemToCart(three);
newShopCart.addItemToCart(four);

newShopCart.checkProducts();
