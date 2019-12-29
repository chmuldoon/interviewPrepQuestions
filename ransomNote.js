//two inputs, a string and magazine text that will be used to spell the string
// returns a booleam
//first attempt
ransomNote = function(str, mag){
  const count  = {}
  for (let i = 0; i < str.length; i++) {
    if(count.hasOwnProperty(str[i])){
      count[str[i]] += 1
    }else{
      count[str[i]] = 1
    }
  }
  for (let i = 0; i < mag.length; i++) {
    if (count.hasOwnProperty(mag[i])) {
      count[mag[i]] -= 1
      if( count[mag[i]] === 0){
        delete count[mag[i]]
      }
      if(Object.keys(count).length === 0){
        return true
      }
    }
  }
  return false
}
//works
//cleaned up
ransomNote = function (str, mag) {
  const count = {}
  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) count[str[i]] = 0;
    count[str[i]]++;
  }
  for (let i = 0; i < mag.length; i++) {
    if (count[mag[i]]) {
      count[mag[i]]--
      if (count[mag[i]] === 0) {
        delete count[mag[i]]
      }
      if (Object.keys(count).length === 0) {
        return true
      }
    }
  }
  return false
}