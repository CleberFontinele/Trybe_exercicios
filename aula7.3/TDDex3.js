const assert = require('assert');
// escreva a função addAllnumbers aqui
let addNumber = 0;
function addAllnumbers (numbers) {
  for ( let i = 0; i < numbers.length; i += 1) {
     addNumber += numbers[i];
  }
  return addNumber;
}
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
//console.log(addNumber);