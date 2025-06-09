/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let b=0
    for(let i=0;i<s.length-1;i++){
      
        b+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }return b
};