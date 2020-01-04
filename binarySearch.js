const binarySearch = function(arr, target){
  const middleInd = Math.floor(arr.length / 2);
  const middleItem  = arr[middleInd];

  if(middleItem === target) { return true };

  if( middleItem > target && arr.length > 1) {
    return binarySearch(arr.slice(0,middleInd) ,target)
  } else if (middleItem < target && arr.length > 1) {
    return binarySearch(arr.slice(middleInd + 1) ,target)
  } else {
    return false
  }
}