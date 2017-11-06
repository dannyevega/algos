function Node(value){
	this.value = value;
	this.next = null;
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
	current.next = node;
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