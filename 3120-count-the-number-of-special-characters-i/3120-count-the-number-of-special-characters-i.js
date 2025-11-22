/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count=0
    let h={}
    for(let i of word){
        
         h[i]=(h[i]||0)+1   
       
        
    }
    for(let i in h){
        if(i>='a'&&i<='z'){
           let j=i.toUpperCase()
            if(h[j]){
                count++
            }
        }
    }
   return count
};