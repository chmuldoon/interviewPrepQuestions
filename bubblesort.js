const bubbleSort = function(arr){
  let sorted = false
  while(!sorted){
    sorted = true
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]){
        sorted = false
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp
      }
    }
  }
  return arr
}