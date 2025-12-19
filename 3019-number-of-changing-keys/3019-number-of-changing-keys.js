/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let a=s.toLowerCase()
    let count=0
    for(let i=0;i<a.length;i++){
        if(a[i]!==a[i+1]){
            count++
        }
    }return count-1;
};