//Escreva a função addOne para passar nos testes já implementados.


const assert = require('assert');
// escreva a função addOne aqui
function addOne (myArray) {
    let array = [];
    for (let index = 0; index < myArray.length; index ++) {
        let arraySum = myArray[index] + 1;
        array.push(arraySum);
    }
    return array;
}
//console.log(array)
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);
//console.log(output);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
