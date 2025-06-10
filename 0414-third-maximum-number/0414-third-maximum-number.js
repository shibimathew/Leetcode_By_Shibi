/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a=new Set(nums)
    let b=[...a]
   let c=b.sort((a,b)=>b-a)
   if(c.length>=3){
   return c[2] 
   }
   else{
    return c[0]
   }
};