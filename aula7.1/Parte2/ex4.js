const skills = ['javaScript', 'css', 'html'];
const substituteWordInArray = string => {
    let stringPassed = "Dev x loading..."
    let word = stringPassed.replace('x', string)
    return word;
}

const string = text => {
    var newOrd = 0;
    var ordeString = skills.sort()
    let newString = `
    ${text} 
    Minhas 5 habilidades são:
    `
    
    for (let i = 0; i < ordeString.length; i += 1) {
    newOrd = ordeString[i]
    newString += `${newOrd}
    `
    }
    return newString
    }
    console.log(string(substituteWordInArray('Cleber'))) 