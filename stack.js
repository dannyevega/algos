function Stack(capacity) {
	this.capacity = capacity || Infinity;
	this.storage = {};
	this.min = {};
	this.count = 0;
}

Stack.prototype.push = function(value) {
	if(this.count === this.capacity){
		console.log("Max capacity already reached. Remove element before adding a new one.");
		return;
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