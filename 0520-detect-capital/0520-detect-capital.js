/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let w= word.toLowerCase()
     let wu= word.toUpperCase()
     let s = word.slice(1).toLowerCase()
     let r = word.slice(1)
    if(word==w){
        return true
    }else if(word==wu){
        return true
    }else if(word[0]==wu[0] && r==s  ){
        return true
    }else{
        return false
    }
    
};