/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countr =0
    let count=0
    for(let i=0;i<s.length;i++){
        if(s[i]=='R'){
            countr++
        }else if(s[i]=='L'){
            countr--
        }
        if(countr==0){
            count++
        }
    }
    return count
};