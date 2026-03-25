/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  
    let res = [];
    let count = {};

    // count digits
    for (let d of digits) {
        count[d] = (count[d] || 0) + 1;
    }

    for (let i = 100; i <= 999; i++) {
        if (i % 2 !== 0) continue;

        let temp = { ...count };
        let num = i.toString();
        let valid = true;

        for (let digit of num) {
            if (!temp[digit]) {
                valid = false;
                break;
            }
            temp[digit]--;
        }

        if (valid) res.push(i);
    }

    return res;

};