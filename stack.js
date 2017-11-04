// Basic Implementation
function Stack(capacity){
	this.capacity = capacity || Infinity;
	this.storage = {};
	this.count = 0;
}

Stack.prototype.push = function(value){
	if(this.count < this.capacity){
		this.storage[this.count] = value;
		this.count++;
		return this.count;
	}
	return "Max capacity already reached. Remove element before adding a new one.";
}

Stack.prototype.pop = function(){
	if(this.count === 0){
		return "No element inside the stack. Add element before popping.";
	}
	this.count--;
	var value = this.storage[this.count];
	delete this.storage[this.count];
	return value;
}

Stack.prototype.peek = function(){
	return this.storage[this.count - 1];
}

Stack.prototype.size = function(){
	return this.count;
}

stack = new Stack(3);

// Queue with two stacks created above
function QueueWithTwoStacks(){
	this.inStack = new Stack();
	this.outStack = new Stack();
}

QueueWithTwoStacks.prototype.enqueue = function(value){
	this.inStack.push(value);
}

QueueWithTwoStacks.prototype.transferStacks = function(){
	while(this.inStack.size() > 0){
		this.outStack.push(this.inStack.pop());
	}
}

QueueWithTwoStacks.prototype.dequeue = function(){
	if(this.outStack.size() === 0){
		this.transferStacks();
	}
	var el = this.outStack.pop();
	while(this.outStack.size() > 0){
		this.inStack.push(this.outStack.pop());
	}
	return el;
}


// Getting wild
function Stack(capacity) {
	this.capacity = capacity || Infinity;
	this.storage = {};
	this.min = {};
	this.count = 0;
}

Stack.prototype.push = function(value) {
	if(this.count === this.capacity){
		return "Max capacity already reached. Remove element before adding a new one.";
	}
	this.storage[this.count] = value;
	if(this.count === 0){
		this.min[this.count] = value;
	}
	if(value <= this.storage[this.count - 1]){
		this.min[this.count] = value;
	}
	this.count++;
};
// Time complexity: O(1);

Stack.prototype.pop = function() {
	if(this.count === 0) {throw new Error("Empty stack.")};
	this.count--;
	let result = this.storage[this.count];
	delete this.storage[this.count];
	if(result <= this.min[this.count]){
		delete this.min[this.count];
	}
	return result;
};
// Time complexity: O(1);

Stack.prototype.peek = function() {
	return this.storage[this.count];
};
// Time complexity: O(1);

Stack.prototype.count = function() {
	return this.count;
};
// Time complexity: O(1);

Stack.prototype.contains = function(val) {
	for(let key in this.storage){
		if(val === this.storage[key]){
			return true;
		}
	}
	return false;
};
// Time complexity: O(n);

Stack.prototype.getMin = function() {
	return Object.values(this.min)[Object.values(this.min).length - 1];
};