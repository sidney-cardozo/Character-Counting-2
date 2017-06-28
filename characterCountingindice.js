function countLetters(string){
  var summaryCount = {};
  string = string.replace(/\s/g, '').toLowerCase();

  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(!summaryCount[char]) summaryCount[char] = [];
    summaryCount[char].push(i);
  }
  return summaryCount;
}

console.log(countLetters("Lighthouse in th house"));