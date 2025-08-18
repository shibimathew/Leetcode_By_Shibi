/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a= s.split('')
    let count=0
    let leave=0
    for(let i=0;i<a.length;i++){
        if(a[i]=='A'){
            count++
            if(count>1){
                return false
            }
        }
        if(a[i]=='L'&& a[i+1]=='L' && a[i+2]=='L'){
            return false
        }}
        return true
};