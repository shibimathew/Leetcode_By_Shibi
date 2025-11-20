/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   let h={}
   for(let i of s){
    h[i]=(h[i]||0)+1
   }
   for(let j of t){
    if(!h[j])return j
    h[j]--
   }
};