/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[...nums1,...nums2]
    let mid=Math.floor((arr.length)/2)
     arr.sort((a, b) => a - b);
    if(arr.length%2!==0){
        return arr[mid]
    }else{
        return (arr[mid-1]+arr[mid])/2
    }
};