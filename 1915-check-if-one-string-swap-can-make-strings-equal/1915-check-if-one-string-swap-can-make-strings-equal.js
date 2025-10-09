/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1==s2){
        return true
      
    }
        let res=[]
        let res2 =[]
        let count=0
    for(let i=0;i<s1.length;i++){
        if(s1[i]!==s2[i]){
            count++
            res.push(s1[i])
            res2.push(s2[i])
        }
      
      
    }
    if(count==2 ){
        if(res[0]==res2[1] && res[1]==res2[0])
        return true
    }
    return false
};