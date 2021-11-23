
var createRandomWord = (function() {
    let words = ['apple', 'banana', 'orange' ,'pear'];
    function privateFunc() {
        if (words.length === 0) return undefined;
        let wordIndex = Math.floor(Math.random() * words.length - 1) + 1;
        let word = words[wordIndex];
        words.splice(wordIndex,1)
        return word
    }
    return {
        randomWord: function() {
            return privateFunc();
        },
        wordsLeft: function() {
            return words;
        }
    }
})()
console.log(createRandomWord.wordsLeft());
// createRandomWord.randomWord();
console.log(createRandomWord.wordsLeft());
console.log(createRandomWord.randomWord())
console.log(createRandomWord.wordsLeft());
console.log(createRandomWord.randomWord())
console.log(createRandomWord.wordsLeft());
console.log(createRandomWord.randomWord())
console.log(createRandomWord.wordsLeft());
console.log(createRandomWord.randomWord())
console.log(createRandomWord.wordsLeft());
console.log(createRandomWord.randomWord())
console.log(createRandomWord.wordsLeft());

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     }
// }
// let addFive = makeAdder(5);

// console.log(addFive(4));
// console.log(addFive(2));
// console.log(addFive(5));
// console.log(addFive(8));