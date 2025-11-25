/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let word=s.split(" ")
    if(word.length!==pattern.length)return false
   for(let i=0;i<pattern.length;i++){
    if(word.indexOf(word[i])!==pattern.indexOf(pattern[i])){
        return false
    }
   }return true
};