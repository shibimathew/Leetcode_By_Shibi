/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    console.log(max)
   console.log(min)
   let res= (max-k)-(min+k)
   if(res<0)return 0
   return res
};