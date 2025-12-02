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
 * @return {boolean}
 */
var isValidBST = function(root) {

    // if(root==null) return null
    // if(root){
    //     if(root.value>root.left){
    //         return false
    //     }else if(root.value>root.right){
    //         return false
    //     }
    // }
    // return true
    // console.log(root.value)
    let arr=[]
    function inorder(node=root){
        if(!node)return
        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }
    inorder(root)
   console.log(arr)
   
    for(let i=0;i<arr.length;i++){
      if(arr[i]<=arr[i-1]){
        return false
      }
    }
 return true
};