/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n=nums.length/2
    let obj={}
    for(let i of nums){
        obj[i]=(obj[i]||0)+1
        
    }
    
    for(let i in obj){
       if(obj[i]>n){
        return Number(i)
       }

    }
};