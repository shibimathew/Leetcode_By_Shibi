/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let h={}
  let res=[]
    for(let i of nums){
     h[i]=(h[i]||0)+1
    }
    for(let j in h){
        if(h[j]==2){
         res.push(Number(j))

        }
    }return res
};