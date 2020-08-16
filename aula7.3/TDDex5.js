
// Reescrevendo funções utilizando TDD - 1
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetings = [];

  for (const person in people) {
    greetings.push(greeting + people[person])
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.equal(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result, 'Array esperado deveria conter "Hello" + nome');

//console.log(greetPeople(parameter));
