// vowel
let sentence = 'education is the backbone of a nation';
let vowels = 'aeiou';
const containsAllVowels = vowels.split("").every(vowel => sentence.toLowerCase().includes(vowel));
console.log(containsAllVowels);

// Alphabet

let sen = "The quick brown fox jumps over the lazy dog";
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let allTheAlphabet = alphabets.split("").every(alphabet => sen.toLowerCase().includes(alphabet));
console.log(allTheAlphabet);