/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let count=0
  let pipe=0
  for(let i=0;i<s.length;i++){
    if(s[i]=='|'){
        pipe++
    }else if(s[i]=="*" && pipe%2==0){
        count++
    }
  } return count 
};