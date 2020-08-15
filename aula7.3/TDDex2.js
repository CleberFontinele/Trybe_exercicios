// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths (words) {
    let array = [];
    for ( let i = 0; i < words.length; i += 1) {
        array.push(words[i].length);
    }
    return array;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
//console.log(words);

