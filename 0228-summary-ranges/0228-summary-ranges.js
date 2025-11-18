/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res=[]
    let start=nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]+1!==nums[i+1]){
            end=nums[i]
            if(start==end){
                res.push(""+start)
            }else{
                res.push(start+"->"+end)
            }
            start=nums[i+1]
        }
       
    }
    return res
};