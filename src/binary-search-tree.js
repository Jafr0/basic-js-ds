const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.root = null;
	}

	root() {
		return this.root;
	}

	add(data) {

		function addElem(node, data) {


			if (!node) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				node.left = addElem(node.left, data);
			} else {
				node.right = addElem(node.right, data);
			}
			return node;
		}

		this.root = addElem(this.root, data);
	}

	has(data) {

		return !!(this.find(data));
	}

	find(data) {
		let node = this.root;

		while (node) {

			if (data < node.data) {
				node = node.left;
			} else if (data > node.data) {
				node = node.right;
			} else {

				return node;
			}
		}
		return null;
	}

	remove(data) {
		this.root = removeElem(this.root, data);

		function removeElem(node, data) {
			if (!node) {
				return null;
			}
			if (data < node.data) {
				node.left = removeElem(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeElem(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let mRight = node.right;
				while (mRight.left) {
					mRight = mRight.left;
				}
				node.data = mRight.data;
				node.right = removeElem(node.right, mRight.data)
				return node;
			}

		}
	}

	min() {
		if (!this.root) {
			return;
		}

		let min = this.root;
		while (min.left) {
			min = min.left
		}
		return min.data
	}

	max() {
		if (!this.root) {
			return;
		}

		let max = this.root;
		while (max.right) {
			max = max.right
		}
		return max.data;
	}
}

module.exports = {
	BinarySearchTree
};