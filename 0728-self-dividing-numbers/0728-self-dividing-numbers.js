/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr=[]

  for(let i=left;i<=right;i++){
    let a=i.toString()
      let valid=true
     for(let j of a){
        if(j==0||i%j!==0){
            valid=false
        }
     }
     if(valid){
        arr.push(i)
     }
  }
  return arr
};