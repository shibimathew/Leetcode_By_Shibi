/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result=[]
    for(let i=0;i<nums.length;i+=2){
        let val=nums[i]
        let freq=nums[i+1]
        for(let j=0;j<val;j++){
            result.push(freq)
            
        }
    }
    return result
}