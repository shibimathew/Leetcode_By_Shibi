/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let sum=0
    for(let i=0;i<nums.length;i++){
        let s=nums[i].toString().length
        if(s%2==0){
         sum++
        }
    }
    return sum      
};