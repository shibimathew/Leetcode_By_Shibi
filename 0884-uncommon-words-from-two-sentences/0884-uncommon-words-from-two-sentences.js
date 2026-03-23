/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let words = (s1+" "+s2).split(' ')
  let res=[]
  for(let i of words){
    if(words.indexOf(i)===words.lastIndexOf(i)){
        res.push(i)
    }
  }
  return res
};