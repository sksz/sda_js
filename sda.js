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
            if (typeof this.getHash(hashNode.key) === 'undefined') {
                return;
            }

            this.cells.push(hashNode);
        }

        pop() {
            return this.cells.pop();
        }
    }

    var tablica = new HashTable();

    tablica.push(new HashNode('key3', null));
    tablica.push(new HashNode('key1', 'value1'));
    tablica.push(new HashNode('key2', 'value1'));
    tablica.push(new HashNode('key1', 'value1'));

    if (null) {
        console.log('test');
    }

    console.log(tablica);
}
