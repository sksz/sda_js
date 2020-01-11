class Stack {
    constructor(...items) {
        this.reverse = true;
        this.stack = [...items];
    }

    push(...items) {
        return this.reverse
            ? this.stack.unshift(...items)
            : this.stack.push(...items);
    }

    pop() {
        return this.reverse ? this.stack.pop() : this.stack.shift();
    }
}

var stackTest = new Stack('1', '2', 'a');
stackTest.push(false, 'test', 'e');

console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.pop());
console.log(stackTest.pop());
