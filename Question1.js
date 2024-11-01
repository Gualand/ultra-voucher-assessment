function anagramFunc(listArray) {
  const anagrams = {};

  for (let word of listArray) {
    const breakdownWord = word.split("").sort().join("");
    if (!anagrams[breakdownWord]) {
      anagrams[breakdownWord] = [];
    }
    anagrams[breakdownWord].push(word);
  }
  return Object.values(anagrams);
}

// Contoh penggunaan
const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(anagramFunc(array));
