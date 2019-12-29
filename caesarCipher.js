const caesarCipher = function(str, x){
  x = x % 26;
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < str.length; i++) {
    let oldInd = alphabet.indexOf(str[i]);
    let newInd = (oldInd + x)
    str[i] = alphabet[ newInd]
  }
  return str
}