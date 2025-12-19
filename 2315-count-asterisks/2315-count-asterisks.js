/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let count=0
  let inside = false
  for(let i=0;i<s.length;i++){
    if(s[i]=='|'){
        inside=!inside
    }else if(s[i]=="*" && !inside){
        count++
    }
  } return count 
};