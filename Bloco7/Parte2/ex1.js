// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros 
// menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.


// const factorial = number => {
//     let result = 1

//     for (let i = 2; i <= number; i += 1) {
//         result *= i
//     }

//     return result
// }

// console.log(factorial(5))

const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5))