const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Exercicio 1
  const addNewKey = (lesson2, turno, manha) => {
    lesson2[turno] = manha;
  };
  
  addNewKey(lesson2, 'turno', 'manhã');
  //console.log(lesson2);

  // Exercicio 2
  const listKey = (obj) => {
    let arrayKeys = Object.keys(obj);
    return arrayKeys
  }
  //console.log(listKey(lesson2));

  // Exercicio 3
  const sizeObject = obj => Object.keys(obj).length;
  //console.log(sizeObject(lesson2));

  // Exercicio 4
  const listValues = obj => {
    let arrayValues = Object.values(obj);
    return arrayValues;
  }
  //console.log(listValues(lesson2));

  // Exercicio 5
  // const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
  // console.log(allLessons);

  // Exercicio 6
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  // console.log(allLessons);
  let allStudents = (obj) => {
    console.log(obj);
    let total = 0;
   let allLessons1 = Object.values(obj);
   for (let i in allLessons1) {
    total += allLessons1[i].numeroEstudantes;
  }
  return total;
  }
  //console.log(allStudents(allLessons));

  // Exercicio 7
  const valueKeys = (obj, values) => {
    let keys = Object.keys(obj);
    
    console.log(` ${values}  ${keys[values]}`);
  }
  valueKeys(lesson1, 0);
  console.log();