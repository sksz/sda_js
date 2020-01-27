const kotek = {
    makeSound: function() {
        console.log(this.sound)
    }
};

const superKot = Object.create(kotek);
superKot.sound = 'Miau';

superKot.makeSound();
