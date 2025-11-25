/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  let total=nums.reduce((a,b)=>a+b,0)
  let left=0
  let res=[]
  for(let i=0;i<nums.length;i++){
    let right=total-left-nums[i]
    res.push(Math.abs(left-right))
    left+=nums[i]
  }
  return res
};