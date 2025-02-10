const sentence = 'Adil is a good boy. Akram is a bad boy';
const count = sentence.split(/a/i).length - 1;
console.log('number of A or a: ', count);