/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da var(s)


/**
* @generateRandomPrime
* @param max - states the length of the array
* @returns arr of prime numbers
*/

function generateRandomPrime(max) {
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

var primeOne = generateRandomPrime(1300000);
console.log(primeOne);

var primeTwo = generateRandomPrime(1200000);
console.log(primeTwo);

var arr = [primeOne, primeTwo]
console.log(arr, '1111');

var merged = [].concat.apply([], arr);
console.log(merged, '####');

var test = merged.reduce(function(previousValue, currentValue, index, array) {
   return previousValue + currentValue;
});

console.log(test);

// merge arrays into 1;
// then multiply the contents insise the arrays
// return the result; 



})();





