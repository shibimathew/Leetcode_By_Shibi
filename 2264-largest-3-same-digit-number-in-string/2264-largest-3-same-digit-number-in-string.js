/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let str=""
    for(let i=0;i<num.length;i++){
        if(num[i]==num[i+1]&&num[i+1]==num[i+2]){
            s=num[i].repeat(3)
            if(s>str){
                str=s
            }
            
        }
    }return str
};