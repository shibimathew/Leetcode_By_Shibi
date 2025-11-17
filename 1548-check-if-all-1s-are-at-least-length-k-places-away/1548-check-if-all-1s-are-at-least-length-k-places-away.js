/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let last=-1
   
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            if(last!==-1&& i-last-1<k){
                return false
            }
            last=i
            }
        }
    
    return true
};