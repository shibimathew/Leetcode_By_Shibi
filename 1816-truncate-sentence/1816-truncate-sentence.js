/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let r = []
    let f=s.split(' ')
    for(i=0;i<f.length;i++){
      console.log(f[i])
      if(i<k){
        r.push(f[i])
      }
         
    }return r.join(' ')
};