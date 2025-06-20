/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   let arr=names.map((name,index)=>{
    return { name:name ,height:heights[index]}
   }
   )
   arr.sort((a,b)=>b.height-a.height)

   return arr.map(person=>person.name)
};