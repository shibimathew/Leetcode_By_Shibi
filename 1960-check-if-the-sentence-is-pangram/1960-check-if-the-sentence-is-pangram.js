/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   
    let value=new Set(sentence)
    if(value.size>=26){
      return true
    }else{
        return false
    }
    
};