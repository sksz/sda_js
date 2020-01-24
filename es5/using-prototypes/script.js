function Cat(name) {
    this.name = name;
}

Cat.prototype.makeSound = function () {
    console.log('Cat ' + this.name + ' does ' + this.sound)
}

Cat.prototype.sound = 'Miauu'

const cat1 = new Cat('Puszek')
const cat2 = new Cat('Kłębuszek')

cat1.__proto__ === Cat.prototype // true
cat2.__proto__ === Cat.prototype // true
cat2.__proto__ === cat1.__proto__ // true
cat1.__proto__ === Cat.__proto__ // false
Cat.__proto__ === Function.prototype //true

cat1.makeSound() // 'Cat Puszek does Miauu'