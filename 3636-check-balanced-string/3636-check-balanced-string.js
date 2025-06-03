/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evensum=0
    let oddsum=0
    let nums=num.toString().split('').map(Number)
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            evensum+=nums[i]
        }else{
            oddsum+=nums[i]
        }
    
    }if(evensum==oddsum){
        return true
    }else{
        return false
    }
};