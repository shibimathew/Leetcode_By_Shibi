/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
   
    const n = nums.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        let prefix = new Set(nums.slice(0, i + 1));
        let suffix = new Set(nums.slice(i + 1));
        result.push(prefix.size - suffix.size);
    }

    return result;
};