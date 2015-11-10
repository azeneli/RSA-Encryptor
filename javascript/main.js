/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope


/**
* @generateRandomPrime
* @param max - states the length of the array
* @returns arr of prime numbers
*/

function generateRandomPrime(max) {
	
	if(typeof max !== "number"){
		return -1;
	}

    var sieve = []
    ,  primes = [];

    for (var i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // iteratively marking as composite (i.e., not prime) the multiples of each prime
            // starting with the multiples of 2.
            primes.push(i);
            // The multiples of a given prime are generated as a sequence of numbers starting from that prime
            // with constant difference between them that is equal to that prime
            for (var j = i < 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

// merge arrays into 1;
// then multiply the contents insise the arrays
// return the result; 

var primeOne = generateRandomPrime(552);
if(typeof primeTwo !== "number"){
	console.log('number please');
}
console.log(primeOne);

// if input is a length of >= 8 then it crashes the browser;

var primeTwo = generateRandomPrime(220);
if(typeof primeTwo !== "number"){
	console.log('number please');
}
console.log(primeTwo);

// place var primeOne and primeTwo inside an array
var arr = [ primeOne, primeTwo ];
console.log(arr, '1111');

// merge the two arrays into 1
var merged = [].concat.apply([], arr);
console.log(merged, '####');

// multiply the contents of the array
var largePrimeNum = merged.reduce(function(previousValue, currentValue, index, array) {
   return previousValue * currentValue;
});
console.log( largePrimeNum, 'Largest prime number' );


})();





