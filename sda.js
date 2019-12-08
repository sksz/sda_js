var init;

init = function() {
    class HashNode {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }

    class HashTable {
        constructor() {
            this.cells = new Array(0);
        }

        getHash(key) {
            for (let i = 0; i < this.cells.length; i++) {
                if (this.cells[i].key === key) {
                    return this.cells[i].value;
                }
            }
        }

        push(hashNode) {
            if (typeof this.getHash(hashNode.key) !== 'undefined') {
                return;
            }

            this.cells.push(hashNode);
        }

        pop() {
            if (this.cells.length === 0) {
                return;
            }

            let element = this.cells[0];
            let tempArray = new Array(this.cells.length - 1);

            for (var i = 1; i < this.cells.length; i++) {
                tempArray[i - 1] = this.cells[i];
            }

            this.cells = tempArray;
            return element;
        }
    }

    var tablica = new HashTable();

    tablica.push(new HashNode('key1', 'value1'));
    tablica.push(new HashNode('key2', 'value2'));
    tablica.push(new HashNode('key1', 'value3'));

    console.log(tablica.pop());

    console.log(tablica);
}
