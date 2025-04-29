/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min=salary[0]
    let  max=salary[0]

    let avg =0
    let sum =salary[0]
    for (let i =1;i<salary.length;i++){
        if(max<salary[i]){
         max= salary[i]
        
        }
        if(min>salary[i]){
            min= salary[i]
        }
     sum= salary[i]+sum
        
       
    }
   avg = (sum -min-max)/(salary.length-2)
   return avg
};