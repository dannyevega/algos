function Node(value){
	this.value = value;
	this.next = null;
	this.previous = null;
}

function LinkedList(headValue){
	if(headValue === undefined){
		throw new Error("Must initialize with a head value, fam.");
		return;
	}
	this.head = new Node(headValue);
	this.tail = this.head;
	this.length = 1;
}

LinkedList.prototype.insertNode = function(value){
	let current = this.head, node = new Node(value);
	while(current.next){
		current = current.next;
	}
	this.tail = node;
	node.previous = current;
	current.next = node;
	this.length++;
	return node;
}

// Create a function to insert new node associated with value passed in after a position
LinkedList.prototype.insertNodeAt = function(position, value){
	let node = new Node(value), current = this.head, previous = null, count = 1;
	while(count < position){
		previous = current;
		current = current.next;
		count++;
	}
	previous.next = node;
	node.previous = previous;
	node.next = current;
	current.previous = node;
	this.length++
	return node;
}

LinkedList.prototype.insertHead = function(value){
	let node = new Node(value), current = this.head;
	this.head = node;
	node.next = current;
	current.previous = node;
	this.length++;
	return node;
}

// invoke callback function to print the value of each node
LinkedList.prototype.forEach = function(callback){
	let current = this.head;
	while(current){
		callback(current.value);
		current = current.next;
	}
}

function printNode(val){
	console.log(val);
}

// Create a function that returns a string with all values in list (ex: '0, 1, 2, 3')
LinkedList.prototype.print = function(){
	let result = '', current = this.head;
	while(current){
		result += (current.value + ',');
		current = current.next;
	}
	return result.slice(0, - 1);
}

LinkedList.prototype.removeNode = function(){
	let tail = this.tail;
	this.tail = tail.previous;
	this.tail.next = null;
	this.length--;
	return tail;
}

// Create a function to remove node after a position
LinkedList.prototype.removeNodeAt = function(position){
	let current = this.head, previous = null, count = 1;
	while(count < position){
		previous = current;
		current = current.next;
		count++;
	}
	previous.next = current.next;
	current.next.previous = previous;
	this.length--;
}

LinkedList.prototype.removeHead = function(){
	let current = this.head;
	this.head = current.next;
	current.next.previous = null;
	this.length--;
	return current;
}

LinkedList.prototype.findNode = function(value){
	let current = this.head;
	while(current){
		if(current.value === value){
			return current;
		}
		current = current.next;
	}
	return "Node not found."
}

let linky = new LinkedList(3);
linky.insertNode(5);
linky.insertNode(17);
linky.insertNode(38);
linky.insertNodeAt(3, 9);

var a = [1, 2, 3, 4];
var b = [3, 4, 5];
var c = [3, 4, 5];
var set = {
	add: function(item) {
		this[item] = item;
	}
};
set.add(a);
set.add(b);
set.add(c);

