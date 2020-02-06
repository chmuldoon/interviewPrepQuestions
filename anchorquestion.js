const maxCutTo50 = function(string){
  if(string.length < 50) return null
  let counter = countHash(string)
  let sortedKeys = stringInDescendingOrder(counter)
  let num = 0
  while(num < 50){
    const currChar = sortedKeys.shift();
    const currNum = counter[currChar];
    num += currNum
  }
  return sortedKeys
}

const countHash = function(string){
  let hash = {};
  for(let i = 0; i < string.length; i++){
    if(!hash[string[i]]){
      hash[string[i]] = 0
    }
    hash[string[i]] += 1
  }
  return hash
}

const stringInDescendingOrder = function(obj){
  const keys = Object.keys(obj)
  return keys.sort((key1, key2) => obj[key2] - obj[key1])
}
