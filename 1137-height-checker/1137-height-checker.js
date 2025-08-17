/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let a=[...heights].sort((a,b)=>a-b)
    let count=0
    for(let i=0;i<heights.length;i++){
        if(heights[i]!=a[i]){
            count++
        }
    }
    return count  
};