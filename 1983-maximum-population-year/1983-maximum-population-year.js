/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {


    let a = logs.flat();
    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            a[i] = a[i] - 1;
        }
    }

    let years = [];
    for (let i = 0; i < a.length; i += 2) {
        let birth = a[i];
        let death = a[i + 1];
        for (let year = birth; year <= death; year++) {
            years.push(year);
        }
    }
 
    let count = {};
   
    for (let year of years) {
        count[year] = (count[year] || 0) + 1;
    }

    let maxCount = Math.max(...Object.values(count));

   
    let maxYear = Math.min(...Object.keys(count).filter(year => count[year] === maxCount).map(Number));

    return maxYear;
};

//     let a=logs.flat()
//     console.log(a)
//     for(let i=0;i<a.length;i++){
//         if(i%2!=0){
//             a[i]=a[i]-1
//         }else {
//             a[i]=a[i]
//         }
//         console.log(a)
    
// }
// let count={}
//  for(let key of a){
//     if(count[a[key]]){
//         count[a[key]]++
//     }else{
//         count[a[key]]=1
//     }



//  let maxCount = Math.max(...Object.values(count));

//     // Find the earliest year with max frequency
//     let maxYear = Math.min(...Object.keys(count).filter(year => count[year] === maxCount).map(Number));

//     return maxYear;
    

// };