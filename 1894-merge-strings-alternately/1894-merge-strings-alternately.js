/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
       let a=word1.split("")
    let b=word2.split("")
    let merge=[]
    let n=word1.length+word2.length
    for(let i=0;i<n;i++){
         merge.push(a[i])
           merge.push(b[i])
          

    }
    
   return merge.join('')
};