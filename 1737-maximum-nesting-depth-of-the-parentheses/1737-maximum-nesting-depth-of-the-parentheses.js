/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
      let depth = 0;
    let maxD = 0;

    for (let ch of s) {
        if (ch === '(') {
            depth++;
            maxD = Math.max(maxD, depth);
        } else if (ch === ')') {
            depth--;
        }
    }

    return maxD;
};