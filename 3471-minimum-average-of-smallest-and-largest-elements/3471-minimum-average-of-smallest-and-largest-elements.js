/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
   
    nums.sort((a, b) => a - b);
    
    let averages = [];
    let i = 0, j = nums.length - 1;

    while (i < j) {
        let avg = (nums[i] + nums[j]) / 2;
        averages.push(avg);
        i++;
        j--;
    }

   
    return Math.min(...averages);


};