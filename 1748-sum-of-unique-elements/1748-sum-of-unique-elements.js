/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   
   let obj={}
   for(let i of nums){
    obj[i]=(obj[i]||0)+1
   }
  
let sum=0
  for(let i in obj){
    if(obj[i]==1){
        sum+=Number(i)
    }
  }return sum
};