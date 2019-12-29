const mean = function(arr){
  return (arr.reduce((a,b) => a + b, 0) / arr.length)
}
const median = function(arr) {
  if(arr.length % 2 == 0){
    return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2
  }else{
    return arr[Math.floor(arr.length / 2)]
  }
};
const mode = function(arr) {
  let hash = {}
  arr.forEach(element => {
    if(!hash[element]) hash[element] = 0
    hash[element]++
  });
  max = 0
  currMax = null
  Object.keys(hash).forEach(key => {
    if(hash[key] > max){
      currMax = key
      max = hash[key]
    }
  })
  return currMax
};
const meanMedianMode = function(arr){
  const mean = function(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  };
  const median = function(arr) {
    if (arr.length % 2 == 0) {
      return (
        (arr[Math.floor(arr.length / 2)] +
          arr[Math.floor(arr.length / 2) - 1]) /
        2
      );
    } else {
      return arr[Math.floor(arr.length / 2)];
    }
  };
  const mode = function(arr) {
    let hash = {};
    arr.forEach(element => {
      if (!hash[element]) hash[element] = 0;
      hash[element]++;
    });
    max = 0;
    currMax = null;
    Object.keys(hash).forEach(key => {
      if (hash[key] > max) {
        currMax = key;
        max = hash[key];
      }
    });
    return currMax;
  };
  let meany = mean(arr)
  let mediany = median(arr)
  let modey = mode(arr)


  return(
    {
      mean: meany,
      median: mediany,
      mode: modey
    }
  )
}