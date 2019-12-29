const reverseArrayInPlace = function(array){
  let start = 0
  let end = array.length - 1
  while(start <= end){
    array[end] = [array[start], array[start] = array[end]][0]
    start++
    end--
  }
  return array
}