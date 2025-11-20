/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    let k=""
    console.log(res)
   for(let i=res.length-1;i>=0;i--){
    k+=res[i]
   }

   return k==res
};