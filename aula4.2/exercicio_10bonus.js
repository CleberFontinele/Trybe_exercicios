//BONUS 3
//Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá 
// ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do 
// novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja 
// próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i + 1]) {
//     newArray.push(numbers[i] * numbers[i + 1]);
//   } else {
//     newArray.push(numbers[i] * 2);
//   }
// }

// console.log(newArray);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers2 = [];
// for (let item = 0; item < numbers.length - 1; item += 1){
//     numbers2.push(numbers[item] * numbers[item+1]);
// }
// numbers2.push(numbers[numbers.length - 1] * 2);    

// console.log("Nova lista: " + numbers2);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let i = 0; i < numbers.length-1; i++) {
    newNumbers.push(numbers[i]*numbers[i+1]);
}
newNumbers.push(numbers[numbers.length-1]*2);
console.log(newNumbers);
