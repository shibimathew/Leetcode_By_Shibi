/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
   let b=[...score].sort((a,b)=>b-a)
   let obj={}

   console.log(b)
    for(let i=0;i<b.length;i++){
        if(i==0){
            obj[b[i]]="Gold Medal"
        }
          if(i==1){
            obj[b[i]]="Silver Medal"
        }
          if(i==2){
            obj[b[i]]="Bronze Medal"
        }
        if(i>2){
            obj[b[i]]=(i+1).toString()
        }
    }
      let answer = score.map(s => obj[s]);
    return answer;

};