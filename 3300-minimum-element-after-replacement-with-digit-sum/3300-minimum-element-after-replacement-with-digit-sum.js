/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
 
  let min=Infinity
   for(let i=0;i<nums.length;i++){
     let sum=0
      let s=nums[i].toString()
      for(let j=0;j<s.length;j++){
        sum+=Number(s[j])
      
      }
      min=Math.min(min,sum)
   }
   return min 
};