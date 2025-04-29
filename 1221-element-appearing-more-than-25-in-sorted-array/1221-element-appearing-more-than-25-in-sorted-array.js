/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count=1;
    let s=arr.length*0.25
    for(let i=0;i<arr.length;i++){
     if(arr[i]==arr[i+1]){
        count++
     }else{
        count=1
     }
     if(count>s){
        return arr[i]
     }
    
    }if(arr.length<1){
        return arr[0]
    }
};