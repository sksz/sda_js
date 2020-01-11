
class LinkedListNode {
    constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    add (value) {
        var newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        var element = this.head;
        while(element.next) {
            element = element.next;
        }
        element.next = newNode;

        return this;
    }
}

var list = new LinkedList();

list.add(1).add(2);

console.log(list);