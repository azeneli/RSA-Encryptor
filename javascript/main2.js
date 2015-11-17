


(function(){

	function getRandomArbitrary(min, max) {
    	return Math.floor( Math.random() * (max - min) + min );
	}

	var randomNum1 = getRandomArbitrary(1,50);
	console.log(randomNum1, 'first');

	var randomNum2 = getRandomArbitrary(1,55);
	console.log(randomNum2, 'second');


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

	var primeNum1 = generateRandomPrime( randomNum1  );
	console.log(primeNum1, 'jamaica');

	var primeNum2 = generateRandomPrime( randomNum2  );
	console.log(primeNum2, 'jamrock');

	// place var primeOne and primeTwo inside an array
	var primeArr = [ primeNum1, primeNum2 ];
	console.log(primeArr, '1111');

	// merge the two arrays into 1
	var merged = [].concat.apply([], primeArr);
	console.log(merged, '####');

	// multiply the contents of the array
	var largePrimeNum = merged.reduce(function(previousValue, currentValue, index, array) {
	   return previousValue * currentValue;
	});
	console.log( largePrimeNum, 'Largest prime number' );


})();