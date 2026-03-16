/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let obj={}
    for(let i of nums){
        obj[i]=(obj[i]||0)+1
    }
    let arr=[]
   for(let i in obj){
    if(obj[i]==2){
        arr.push(Number(i))
    }

   } return arr
};