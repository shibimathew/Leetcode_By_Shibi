/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i=1;i<n;i++){
      if(i+(n-i)==n){
        if(!i.toString().split("").includes("0")&& !(n-i).toString().split("").includes("0")){
            return [i,n-i]
        }
      }
    }
};