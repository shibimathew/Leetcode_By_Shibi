/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let arr=[1,1,2]
  let arr1=[]
for(i=0;i<nums.length;i++){
    let count=0
    for(j=0;j<nums.length;j++){
        if(nums[i]==nums[j]){
            count++
        }
    }
    if(count==1){
       arr1.push(nums[i]) 
    }
    
    }
    console.log(arr1)
    return parseInt(arr1)

};