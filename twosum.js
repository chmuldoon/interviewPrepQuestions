const twoSum = function(array, target){
  let hash = {}
  let pairs = []
  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i]
    hash[diff] = i
  }
  for (let i = 0; i < array.length; i++) {
    if(hash[array[i]]){
      pairs.push([i, hash[array[i]]]);
    }
  }
  return pairs
}