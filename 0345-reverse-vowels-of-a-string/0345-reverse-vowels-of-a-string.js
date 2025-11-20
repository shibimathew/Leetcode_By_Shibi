/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a=s.split("")
     let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
       
       let i=0
       let j=a.length-1
       while(i<j){
        if(i<j && !vowels.has(a[i])){i++
         continue;
        }
        if(i<j &&  !vowels.has(a[j])){
            j-- 
            continue;
        }
        [a[i],a[j]]=[a[j],a[i]]
        i++
        j--
       }return a.join("")
};