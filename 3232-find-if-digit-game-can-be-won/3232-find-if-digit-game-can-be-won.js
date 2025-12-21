/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum = 0;
    let doubleSum = 0;
    let total = 0;

    for (let num of nums) {
        total += num;
        if (num < 10) {
            singleSum += num;
        } else {
            doubleSum += num;
        }
    }

  
    if (singleSum > total - singleSum) {
        return true;
    }

  
    if (doubleSum > total - doubleSum) {
        return true;
    }

    return false;
};