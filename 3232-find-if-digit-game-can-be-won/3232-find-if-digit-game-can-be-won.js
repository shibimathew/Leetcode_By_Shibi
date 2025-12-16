/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let doubledigit =0;
    let singlesum=0;
for(let i=0;i<nums.length;i++){

  if(nums[i]<10){
       singlesum +=nums[i]
  }else{
  doubledigit +=nums[i]
  }
}
 return doubledigit!==singlesum
};