/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let count =candyType.length/2
    let s=new Set(candyType)
    let a=[...s]
   return Math.min(a.length,count)
};