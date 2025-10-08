/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
   const r1="qwertyuiop"
   const r2="asdfghjkl"
   const r3="zxcvbnm"
   let res=[]
   for(let i of words){
    let w = i.toLowerCase()
    if([...w].every(ch=>r1.includes(ch))||[...w].every(ch=>r2.includes(ch))||[...w].every(ch=>r3.includes(ch))){
       res.push(i)
    }
   }return res
};