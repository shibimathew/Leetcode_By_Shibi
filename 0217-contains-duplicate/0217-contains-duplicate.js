/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={}
    for(let key of nums){
        if(obj[key]){
            obj[key]= (obj[key])+1
        }else{
            obj[key]=1
        }

    }
    console.log(obj)
    for(let j in obj){
        if((obj[j])>1){
            return true
        }
    }return false
};