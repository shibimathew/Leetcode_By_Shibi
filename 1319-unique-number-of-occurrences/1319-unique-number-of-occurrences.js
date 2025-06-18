/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj={}
  for(let i of arr){
    if(obj[i]){
        obj[i]=obj[i]+1
    }else{
        obj[i]=1
    }
   
  }
   console.log(obj)
  let a=[]
a=Object.values(obj)
console.log(a)
// if(a==arr){
//          return true
//     }else{
//         return false
//     }
// for(let j=0;j<arr.length;j++){
    let b=[]
    for(let i=0;i<a.length;i++){
        if(b.includes(a[i])){
            return false
        }else{
           b.push(a[i])
        }
    
    }return true
// for(let j=0;j<arr.length;j++{
//     if(arr[j]==a[j]){
//         return true
//     }else{
//         return false
//     }
// }
//   }for(let key in obj){
//     if((obj[key])>1){
//         return true
//     }else{
//         return false
//     }

// let a = new Set(arr)
// console.log(a)
// n=new Array[..a]
//   n1=z
// r=arr.length-1
// if(n==r){
//     return false
// }else{
//     return true
// }

};