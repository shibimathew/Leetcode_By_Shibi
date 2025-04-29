/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let a=0
    let flag=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
         a=i;
         flag++;
        }
    }
    if(flag!=0){
        return a
    }else{
        nums.push(target)
        nums.sort((a,b)=>a-b)
        for(let j=0;j<nums.length;j++){
          if(nums[j]==target){
            return j
          }
    }
    }

    
    
};