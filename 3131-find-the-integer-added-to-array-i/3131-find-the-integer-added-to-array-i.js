/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
//     let sum=0
//     let sum2=0
//     for(let i=0;i<nums1.length;i++){
//       sum+=nums1[i]
//     }
//     for(let i=0;i<nums2.length;i++){
//       sum2+=nums2[i]
//     }
//  return (sum2-sum)/nums1.length
return Math.min(...nums2)-Math.min(...nums1)
};