/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
//    let even =nums.filter((x)=>x%2==0 & x%3==0).reduce((acc,curr)=>acc+curr,0)
//    let count=nums.filter((x)=>x%2==0 & x%3==0).length
//    console.log(even)
let count=0
let sum=0

   for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0 && nums[i]%3==0){
        count++
        sum+=nums[i]
    
    }
   }
   
   if(count==0)
   return 0
   return Math.floor(sum/count)
};