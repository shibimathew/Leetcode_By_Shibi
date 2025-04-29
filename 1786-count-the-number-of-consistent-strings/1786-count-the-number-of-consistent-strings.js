/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
 for(let i of words){
  let  flag=0
   for(let j of i){
    if(!allowed.includes(j)){
        flag=1
    }
   }
   if(flag==0){
    count++
   }
 }return count  
};