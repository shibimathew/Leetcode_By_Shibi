/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let obj={}
    let res=[]
  
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++)
        obj[grid[i][j]]=(obj[grid[i][j]]||0)+1
    }
  for(let key in obj){
    if(obj[key]>1){
        res.push(Number(key))
    }
  }
  let n=grid.length
  for(let i=1;i<=n*n;i++){
    if(!obj[i]){
        res.push(i)
    }
  }
  
return res

};