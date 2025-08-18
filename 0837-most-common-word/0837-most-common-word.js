/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
   
   let para = paragraph.toLowerCase().split(/[" !?',;."]/)

    let count = {};
    for (let i = 0; i < para.length; i++) {
        let word = para[i];
        if (word && !banned.includes(word)) {
            count[word] = (count[word] || 0) + 1;
        }
    }
       let maxWord = '';
    let maxCount = 0;
    for (let word in count) {
        if (count[word] > maxCount) {
            maxCount = count[word];
            maxWord = word;
        }
    }return maxWord
     
  
};