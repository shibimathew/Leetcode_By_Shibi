/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let s=Math.max(...nums)
    let r=Math.min(...nums)
    let res=[]
    for(let i=r;i<=s;i++){
        if(!nums.includes(i)){
            res.push(i)
        }
    }
    return res
};