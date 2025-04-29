/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    let winner =0
    for(let i=0;i<grid.length;i++){
            if(i==winner){
                continue
            } else if (grid[winner][i]==0){
                winner=i
            }
            
        
    }return winner
    
};