/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let s=new Set(nums)
    let res=[]
    for(let i=1;i<=nums.length;i++){
        if(!s.has(i)){
            res.push(i)
            
        }
    }return res
};