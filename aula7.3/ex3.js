const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//assert.strictEqual(typeof(myRemoveWithoutCopy), 'function');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const array = [1, 2, 3, 4, 5];
assert.strictEqual(array.length, 5);
myRemoveWithoutCopy(array, 1);
assert.strictEqual(array.length, 4);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4]);
