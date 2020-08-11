// var não deve existir no código.
// A variável ideclarada na instrução if deve ser igual ao "escopo do bloco".
// checkScope() deve retornar "escopo de função"

/*
function checkScope() {
    'use strict';
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
*/

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
      
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  