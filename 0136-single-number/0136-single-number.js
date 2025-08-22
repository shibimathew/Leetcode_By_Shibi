/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let obj={}
for(let i of nums){
        obj[i]=(obj[i] || 0)+1
}
for(let i in obj){
if(obj[i]===1){
    return Number(i)
}}

};