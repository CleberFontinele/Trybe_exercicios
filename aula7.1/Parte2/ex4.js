const skills = ['javaScript', 'css', 'html'];
const substituteWordInArray = string => {
    let stringPassed = "Testando a impressão do x"
    let word = stringPassed.replace('x', string)
    return word;
}
console.log(skills)

const juntos = text => {
    var newOrd = 0;
    var ordenado = softskills.sort()
    let newString = `
    ${text} 
    Minhas 5 habilidades são:
    `
    
    for (var i = 0; i < ordenado.length; i += 1) {
    newOrd = ordenado[i]
    newString += `
    ${newOrd}
    `
    }
    return newString
    }
    console.log(juntos(substX('bru'))) 