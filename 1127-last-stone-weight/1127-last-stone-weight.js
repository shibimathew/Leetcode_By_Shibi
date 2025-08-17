/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

  while(stones.length>1){
      stones.sort((a,b)=>b-a)
  let x= stones[1]
  let y= stones[0]
  if(x==y){
    stones.splice(0,2)
  }else{
   
    stones.splice(0,2)
    stones.push(y-x)
  }
  
  }
  return stones.length ? stones[0] : 0;
};