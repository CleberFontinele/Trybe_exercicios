    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
//   const letter = names.reduce((acc, curr, index, array) => {
//       return acc - curr.toLowerCase;
//   })
//   return letter;

const letters = names.reduce((acc, curr) => {
        let count = 0;
        curr.split('').filter(letter => {
          if (letter === 'A' || letter === 'a'){
            count += 1;
          }
        });
        return  acc + count;
      }, 0);
      return letters;
}

console.log(containsA());
//assert.deepEqual(containsA(), 20);

//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.