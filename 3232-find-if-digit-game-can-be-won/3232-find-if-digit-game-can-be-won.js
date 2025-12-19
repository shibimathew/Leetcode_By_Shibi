/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let s=0;
    let d=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<10){
            s+=nums[i]
        }else{
            d+=nums[i]
        }
    }return s!==d
}