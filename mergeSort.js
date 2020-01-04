const mergeSort = function(arr){
  if(arr.length < 2) return arr;
  let middleInd = Math.floor(arr.length / 2);
  let left = arr.slice(0,middleInd);
  let right = arr.slice(middleInd);

  return merge(mergeSort(left), mergeSort(right))
}

const merge = function(left, right){
  let result = [];
  while(left.length && right.length){
    let minEl;
    if(left[0] < right[0]) minEl = left.shift();
    else minEl = right.shift();
    result.push(minEl);
  }
  result = result.concat(left, right)
  return result
}