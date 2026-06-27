/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj={}
    for(let i of text){
        obj[i]=(obj[i]||0)+1
    }
 return Math.min(
    obj["a"]||0,obj["b"]||0,obj["n"]||0,Math.floor((obj["l"]||0)/2),Math.floor((obj["o"]||0)/2))

 

};