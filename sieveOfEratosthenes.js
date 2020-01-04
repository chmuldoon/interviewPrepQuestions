const sieveOfEratosthenes = function(num){
  let output = []
  for (let i = 2; i < num; i++) {
    if (isPrime(i)){
      output.push(i)
    }
    
  }
  return output
}

const isPrime = function(num, memo = {}){
  if (num < 2) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0){
      return false
    }
  }
  return true
}