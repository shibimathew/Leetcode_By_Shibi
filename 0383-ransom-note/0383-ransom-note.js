/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let obj={}
    for(let i of magazine){
        obj[i]=(obj[i]||0)+1
    }
    for(let j of ransomNote){
        if(!obj[j]){
            return false
        }
        obj[j]--
    }return true

}