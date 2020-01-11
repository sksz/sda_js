class BinaryTreeNode {
    constructor(value, parent = null, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.parent = parent;
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }

    add (value, parent = null) {
        if (parent === null && this.root !== null) {
            throw 'Root Node już istnieje';
        }

        if (parent === null) {
            this.root = new BinaryTreeNode(value);
            return this;
        }

        if (!parent.left) {
            parent.left = new BinaryTreeNode(value, parent);
            return this;
        }

        if (!parent.right) {
            parent.right = new BinaryTreeNode(value, parent);
            return this;
        }

        throw 'Nie mogę dopisać';
    }

    find (value, root = null) {
        var left, right = null;
        if (root === null && this.root.value === value) {
            return this.root;
        } else if (root !== null && root.value === value) {
            return root;
        } else if (root === null) {
            left = this.root.left;
            right = this.root.right;
        } else {
            left = root.left;
            right = root.right;
        }

        left = this.find(value, left);
        if (left) {
            return left;
        }

        right = this.find(value, right);
        if (right) {
            return right;
        }
    }
}

var tree = new BinaryTree();

tree.add('a');
var root = tree.find('a');
tree.add('b', root).add('c', root);

var child = tree.find('b');
tree.add('d', child).add('e', child);

console.log(tree);