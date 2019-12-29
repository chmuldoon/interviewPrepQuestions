//takes in a a number and prints all the numbers below it and return fizz 
//if divisble by 3 or Buzz if divisible by 5 and fizzBuzz if both

const fizzBuzz = function(n){
  let output = []
  for (let i = 1; i < n + 1; i++) {
    output.push("Fizz".repeat(i % 3 === 0) + "Buzz".repeat(i % 5 === 0) || i)
  }
  return output;
}
