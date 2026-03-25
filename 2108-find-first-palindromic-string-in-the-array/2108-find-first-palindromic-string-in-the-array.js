/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let s=""
    for(let i=0;i<words.length;i++){
         s=words[i]
        let r=s.split('').reverse().join('')
        if(s==r){
            return s
        }
    }return ""
};