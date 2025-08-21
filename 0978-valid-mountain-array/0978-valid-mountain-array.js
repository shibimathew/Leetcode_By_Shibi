/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length<3)return false
    let maxi=arr.indexOf(Math.max(...arr))
   if(maxi==0 || maxi==arr.length-1)return false
   for(let i=0;i<maxi;i++){
    if(arr[i]>=arr[i+1]){
        return false
    }
   } 
   for(let i=maxi;i<arr.length;i++){
    if(arr[i]<=arr[i+1]){
        return false
    }
   }
    return true
};