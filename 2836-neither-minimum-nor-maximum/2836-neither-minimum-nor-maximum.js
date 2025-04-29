/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    for(let i =0;i<nums.length;i++)
    {
        if(nums.length<3){
            return -1
        }
        nums.sort((a,b)=>a-b)
        return nums[1]
    }
    return res
};