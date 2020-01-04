//returns the nth fib num
const fibonacci = function(n, memo = {}){
  if (n in memo){
    return memo[n]
  }
  let value;
  if(n === 1 || n === 2){
     value = 1
  }else if(n > 2){
    value = fibonacci(n - 1) + fibonacci(n - 2)
  }
  memo[n] = value
  return value
}