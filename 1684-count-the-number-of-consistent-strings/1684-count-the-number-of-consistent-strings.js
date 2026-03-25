/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0
 
 for(let i of words){
       let flag=1
       for(let j of i){
    if(!allowed.includes(j)){
        flag=0
    }
       }
    if(flag==1){
        count++
    }
 }return count
};