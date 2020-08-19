// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);

// console.log(isEven); // [ 30, 22 ]

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);

// console.log(isEven2); // [ 30, 22 ]



// const persons = [
//     { firstName: "Maria", lastName: "Ferreira" },
//     { firstName: "João", lastName: "Silva" },
//     { firstName: "Antonio", lastName: "Cabral" },
//   ];
  
//   const fullNames = [];
//   for(let i = 0; i < persons.length; i += 1){
//     fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
//   }
  
//   console.log(fullNames);
//=============================================================================
//   const persons = [
//     { firstName: "Maria", lastName: "Ferreira" },
//     { firstName: "João", lastName: "Silva" },
//     { firstName: "Antonio", lastName: "Cabral" },
//   ];
  
//   const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
//   console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];

function nameAndAge() {
  // escreva seu código aqui
const arrayObj = books.map((book) => {
    const author = book.author.name;
    const age = book.releaseYear - book.author.birthYear;
    return {age, author};
}).sort((author1, author2) => author1.age - author2.age) 
 
return arrayObj;

}
//console.log(nameAndAge());
assert.deepStrictEqual(nameAndAge(), expected_result);
