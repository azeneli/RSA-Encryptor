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

var prime = generateRandomPrime(160);
console.log(prime);














})();





