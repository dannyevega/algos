function BST(value){
	if(value === undefined){
		throw new Error("Must initialize with a head value, fam.");
		return;
	}
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function(value){
	if(value < this.value){
		if(this.left === null){
			this.left = new BST(value);
		} else {
			this.left.insert(value);
		}
	} else {
		if(this.right === null){
			this.right = new BST(value);
		} else {
			this.right.insert(value);
		}
	}
	return this;
}

BST.prototype.contains = function(value){
	if(value === this.value){
		return this;
	} else {
		if(value < this.value){
			if(this.left === null){
				return false;
			} else {
				return this.left.contains(value);
			}
		} else {
			if(this.right === null){
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}
}

BST.prototype.contains = function(value){
	if(value === this.value){
		return true;
	} else {
		if(this.left && value < this.value){
			return this.left.contains(value);
		}
		if(this.right && value > this.value){
			return this.right.contains(value);
		}
	}
	return false;
}

// [1, 3, 4, 6, 7, 8, 10, 13, 14] --> Left, Self, Right
BST.prototype.inOrderTraversal = function(){
	var current = this, result = [];
	function traverse(node){
		if(node.left){
			traverse(node.left);
		}
		result.push(node.value);
		if(node.right){
			traverse(node.right);
		}
	}
	traverse(current);
	return result;
}

// [8, 3, 1, 6, 4, 7, 10, 14, 13] --> Self, Left, Right
BST.prototype.preOrderTraversal = function(){
	var current = this, result = [];
	function traverse(node){
		result.push(node.value);
		if(node.left){
			traverse(node.left);
		}
		if(node.right){
			traverse(node.right);
		}
	}
	traverse(current);
	return result;
}

// [1, 4, 7, 6, 3, 13, 14, 10, 8] --> Left, Right, Self
BST.prototype.postOrderTraversal = function(){
	var current = this, result = [];
	function traverse(node){
		if(node.left){
			traverse(node.left);
		}
		if(node.right){
			traverse(node.right);
		}
		result.push(node.value);
	}
	traverse(current);
	return result;
}

// Start off with an undefined parent parameter - we dont set this until weve reached the final if confitional
BST.prototype.deleteMinNode = function(parent){
	// Case: furthest down leaf node -- all the way down to left
	if(this.left === null && this.right === null){
		// Check for parent here in event BST has only one node
		if(parent){
			parent.left = null;
		} else {
			this.head = null;
		}
	}
	// Case: If minimum node has a right tree
	if(this.left === null && this.right){
		// Check if a parent exists in the case were deleting the root node (i.e. tree that resembles a linked list 7 --> 8 --> 9)
		// If it has a parent, then its not a root node
		if(parent){
			parent.left = this.right;
		} else {
			// Case: we have a root node -- just overwrite the values
			this.value = this.right.value;
			this.right = this.right.right;
		}
	}
	// Heres our main call -- it keeps recursing til it reaches either the leaf or minimum node
	if(this.left){
		this.left.deleteMinNode(this);
	}
	return this;
}

// without comments
BST.prototype.deleteMinNode = function(parent){
	if(this.left === null && this.right === null){
		if(parent){
			parent.left = null;
		} else {
			this.value = null;
		}
	}
	if(this.left === null && this.right){
		if(parent){
			parent.left = this.right;
		} else {
			this.value = this.right.value;
			this.right = this.right.right;
		}
	}
	if(this.left){
		this.left.deleteMinNode(this);
	}
	return this;
}

BST.prototype.deleteMaxNode = function(parent){
	if(this.left === null && this.right === null){
		if(parent){
			parent.right = null;
		} else {
			this.value = null;
		}
	}
	if(this.right === null && this.left){
		if(parent){
			parent.right = this.left;
		} else {
			this.value = this.left.value;
			this.left = this.left.left;
		}
	}
	if(this.right){
		this.right.deleteMaxNode(this);
	}
	return this;
}

BST.prototype.deleteNode = function(value){

}

var bst = new BST(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

var boo = new BST(7);
boo.insert(8);
boo.insert(9);
