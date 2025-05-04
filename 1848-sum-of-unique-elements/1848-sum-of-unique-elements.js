/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let obj ={}
    for(let i =0;i<nums.length;i++){
        obj[nums[i]]=(obj[nums[i]]||0)+1;
    }
   console.log(obj)
    let sum =0;

   for(let unique in obj){
    if(obj[unique]==1)
    {
        sum=sum+Number(unique)
    }
    
   }
    return sum

};