const reverseWords = function(str){
  let words = str.split(" ")
  for (let i = 0; i < words.length; i++) {
    debugger
    words[i] = reverse(words[i])
  };
  return words.join(" ")
}
const reverse = function(word){
  let output = ""
  for (let i = 0; i < word.length; i++) {
    output = word[i] + output
  }
  return output
}