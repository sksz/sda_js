class Farmer {
    constructor() {
        this.goats = [];
        this.furStored = 0;
        this.shaveGoat = this.shaveGoat.bind(this);
        this.farmerImg = (() => {
            const farmerImg = document.createElement('img');
            farmerImg.src = 'happy-player.jpg';
            farmerImg.style.width = '300px';
            farmerImg.style.height = '300px';
            return farmerImg;
        })();
        this.farmerContainer = document.getElementById('farmer');
        this.scoreContainer = document.getElementById('score');

        this.farmerContainer.appendChild(this.farmerImg);
        this.scoreContainer.innerText = 'Zgolone futerko:' + 0;
    }

    shaveGoat(event) {
        const goat = this.goats.find(goat => goat.name === event.target.dataset.name);
        const fur = goat.shaveMyFur();
        this.furStored += fur;
        this.scoreContainer.innerText = 'Zgolone futerko:' + this.furStored;
    }

    iWantMyGoats(goats) {
        this.goats = goats;
    }

    iLostTheGame() {
        this.farmerImg.src = 'angry-player.jpeg';
        this.scoreContainer.innerText = 'Game Over!';
    }
}

class Goat {
    constructor(name) {
        this.name = name;
        this.fur = 0;
        this.amIdead = false;
        this.img = (() => {
            const goatImg = document.createElement('img');
            goatImg.src = 'goat.jpg';
            goatImg.style.width = '150px';
            goatImg.style.height = '150px';
            goatImg.style.paddingRight = '20px';
            goatImg.style.cursor = 'Pointer';
            return goatImg;
        })();
    }

    shaveMyFur() {
        const fur = this.fur;
        this.fur = 0;
        return fur;
    }

    increaseFur() {
        if (this.fur > 5) {
            this.killGoat()
        }
        this.fur += 1;
    }

    killGoat() {
        this.amIdead = true;
    }
}

class ShaveGoatGame {
    constructor() {
        this.player = null;
        this.gameContainer = document.getElementById('goatsContainer');
    }

    startTheGame() {
        this.createPlayer();
        this.createGoats();
        this.renderGoats();
    }

    renderGoats() {
        this.player.goats.forEach(goat => {
            this.gameContainer.appendChild(goat.img);
            goat.img.addEventListener('click', this.player.shaveGoat);
            goat.img.dataset.name = goat.name;
            goat.img.classList.add('goat');
            goat.img.title = goat.name
        });
    }

    createPlayer() {
        this.player = new Farmer();
    }

    createGoats() {
        const kuzka1 = new Goat('Balbinka');
        const kuzka2 = new Goat('Balbinka2');
        const kuzka3 = new Goat('Balbinka3');
        const kuzka4 = new Goat('Balbinka9');
        const kuzka5 = new Goat('Balbinka4');
        const kuzka6 = new Goat('Balbinka5');
        const kuzka7 = new Goat('Balbinka6');
        const kuzka8 = new Goat('Balbinka7');

        this.player.iWantMyGoats([kuzka1, kuzka2, kuzka3, kuzka4, kuzka5, kuzka6, kuzka7, kuzka8]);
    }

    removeDeadGoats() {
        const goatsAlive = this.player.goats.filter(goat => goat.amIdead === false);
        const goatsDead = this.player.goats.filter(goat => goat.amIdead === true);
        this.player.goats = goatsAlive;

        goatsDead.forEach(deadGoat => {
            const goatsInHtml = document.querySelectorAll('.goat');
            goatsInHtml.forEach(goatInHtml => {
                if (goatInHtml.dataset.name === deadGoat.name) {
                    goatInHtml.src = 'dead-goat.jpeg';
                    goatInHtml.removeEventListener('click', this.player.shaveGoat);
                }
            });
        });

        if (this.player.goats.length === 0) {
            this.gameOver();
        }
    }

    gameOver() {
        this.player.iLostTheGame();
    }
}

const newGame = new ShaveGoatGame();
newGame.startTheGame();

setInterval(() => {
    newGame.player.goats.forEach(goat => {
        goat.increaseFur();
        newGame.removeDeadGoats();
    });
}, 1000);
