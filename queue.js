function Queue(capacity) {
	this.capacity = capacity || Infinity;
	this.storage = {};
	this.head = 0;
	this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
	if(this.count() < this.capacity){
		this.storage[this.tail] = value;
	} else {
		return "Max capacity already reached. Remove element before adding a new one.";
	}
	this.tail++;
};
// Time complexity:

Queue.prototype.dequeue = function() {
	let result = this.storage[this.head];
	delete this.storage[this.head];
	this.tail--;
	if(this.head < this.tail){
		this.head++;
	}
	return result;
};
// Time complexity:

Queue.prototype.peek = function() {
	return this.storage[this.tail];
};

Queue.prototype.count = function() {
	return this.tail - this.head;
};
// Time complexity:

/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
*/

function Queue(){
	this.storage = [];
	this.temp = []
}

Queue.prototype.enqueue = function(val){
	this.storage.push(val);
}

Queue.prototype.dequeue = function(){
	if(this.temp.length === 0){
		while(this.storage.length > 0){
			this.temp.push(this.storage.pop());
		}
		this.temp.pop();
		while(this.temp.length > 0){
			this.storage.push(this.temp.pop());
		}
	}
}

















