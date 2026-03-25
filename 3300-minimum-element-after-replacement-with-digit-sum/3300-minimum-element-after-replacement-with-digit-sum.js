/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    let mini=Infinity
for(let i=0;i<nums.length;i++){
    let s=nums[i].toString()
        let sum=0
    for(let j=0;j<s.length;j++){
        sum+=Number(s[j])
    }
    mini=Math.min(mini,sum)
}
return mini
};