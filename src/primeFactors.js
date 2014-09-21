var primeFactors = function(number){
  var primes = [];
  if(number === 1){
    return primes;
  }
  var otherPrimes = [];
  if(number % 2 === 0){
     primes.push(2);
     otherPrimes = primeFactors(number/2);
  }
  else if(number % 3 === 0){
    primes.push(3);
    otherPrimes = primeFactors(number/3);
  }

  var j = 5;
  while(primes.length === 0){
    if(number % j == 0){
      foundDivisor = true;
      primes.push(j);
      otherPrimes = primeFactors(number/j);
    }
    j = j + 2;
  }
  for(var i = 0; i<otherPrimes.length; i++){
    primes.push(otherPrimes[i]);
  }

  return primes;
}
