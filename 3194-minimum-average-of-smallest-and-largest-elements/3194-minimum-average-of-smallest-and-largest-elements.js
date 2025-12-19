/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
   
    nums.sort((a, b) => a - b);
    let mini=Infinity
   let n=nums.length
   for(let i=0;i<n/2;i++){
    let x= (nums[i]+nums[n-i-1])/2
    mini=Math.min(x,mini)
   }
return mini

};