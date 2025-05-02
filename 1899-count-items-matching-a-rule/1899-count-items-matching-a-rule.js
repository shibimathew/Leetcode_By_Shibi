/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
   let count=0;
   let keyIndex;
   if(ruleKey=="type"){
    keyIndex=0
   }else if(ruleKey=="color"){
    keyIndex=1
   }else if(ruleKey=="name"){
    keyIndex=2
   }
   for(let i =0;i<items.length;i++){
    if(items[i][keyIndex]==ruleValue){
        count++
    }
   }return count
};