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

















