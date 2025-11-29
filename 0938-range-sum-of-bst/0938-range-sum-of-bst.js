/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {

    let arr=[]
  function inorder(node=this.root){
    if(!node)return
        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    
   

  }
  inorder(root)
  console.log(arr)
      let sum=0
      for(let i=0;i<arr.length;i++){
        if(arr[i]!==null){
            if(arr[i]>=low && arr[i]<=high){
                sum+=arr[i]
            }
        }
      }
  return sum
      
 
};