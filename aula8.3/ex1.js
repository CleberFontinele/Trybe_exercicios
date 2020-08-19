// Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const matriz = arrays.reduce((acc, bcc) => acc.concat(bcc));
  return matriz;
}
//console.log(flatten());
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
