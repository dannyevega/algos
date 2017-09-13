/*
Recipe for Recursion:
1. Identify base case(s)
2. Identify recursive case(s)
3. Write procedures for each case that brings you closer to the base case(s)

function recurse(){
	if(){
		// base case
		return;
	} else {
		//recursive case
		recurse();
	}
	return;
}
*/

function loopNTimes(n){
	console.log('n equals', n);
	if(n <= 1){
		return "complete";
	}
	return loopNTimes(n - 1);
}
loopNTimes(4);

function factorial(n){
	let result = 1;
	for(var i = 1; i <= n; i++){
		result *= i;
	}
	return result;
}

function factorial(n){
	if(n < 1){
		return 1;
	}
	return n * factorial(n - 1);
}

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function printNumsInReverseLoop(num){
	while(num >= 0){
		console.log(num);
		num--;
	}
}

//2. Next, try looping just like above except using recursion
function printNumsInReverseRecursive(num){
	if(num < 0){
		return;
	} else {
		console.log(num);
		printNumsInReverse(num - 1);
	}
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, exp){
	let result = 1;
	while(exp > 0){
		result *= base;
		exp--;
	}
	return result;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function exponentRecursive(base, exp){
	if(exp === 0){
		return 1;
	} else {
		return base * exponentRecursive(base, exp - 1);
	}
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num){
	let result = [];
	function helper(index){
		if(index === arr.length){
			return;
		} else {
			result[index] = arr[index] * 2;
			helper(index + 1);
		}
	}
	helper(0);
	return result;
}

function recursiveMultiplier(arr, num){
	if(arr.length === 0){
		return arr;
	}
	let elem = arr.pop();
	recursiveMultiplier(arr, num);
	arr.push(elem * 2);
	return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr){
	let result = [];
	function helper(index){
		if(index < 0){
			return;
		} else {
			result.push(arr[index])
			helper(index - 1);
		}
	}
	helper(arr.length - 1);
	return result;
}

function recursiveReverse(arr){
	let result = [];
	function reverseItems(orderedArr){
		if(arr.length > 0){
			result.push(arr.pop());
			reverseItems(orderedArr);
		}
		return;
	}
	reverseItems(arr);
	return result;
}














