// const customer = {
//     firstName: 'Roberto',
//     lastName: 'Souza',
//     age: 22,
//     job: 'Teacher',
//   };

//   console.log(customer.lastName);

  // const customer1 = {
  //   firstName: 'Roberto',
  //   age: 22,
  //   job: 'Teacher',
  // };
  
  // console.log(customer1);
  
  // customer1.lastName = 'Faria';
  // console.log(customer1);
  
  // const customer2 = {
  //   firstName: 'Maria',
  //   age: 23,
  //   job: 'Medic',
  // };
  
  // console.log(customer2);
  // customer2['lastName'] = 'Silva';
  // console.log(customer2);

  // const customer = {
  //   firstName: 'Roberto',
  //   age: 22,
  //   job: 'Teacher',
  // };
  
  // let newKey = 'lastName';
  // const lastName = 'Ferreira';
  // customer[newKey] = lastName;
  // newKey = 'fullName';
  // const fullName = `${customer.firstName} ${customer.lastName}`;
  // customer[newKey] = fullName;
  // console.log(customer);

  const dadosPessoais = {
    nome: 'Cleber',
    idade: 32,
    job: 'stundent'
  };

  let novaChave = 'sobrenome';
  const sobrenome = 'Fontinele';
  dadosPessoais[novaChave] = sobrenome;
  novaChave = 'nomeCompleto';
  const nomeCompleto = `${dadosPessoais.nome} ${dadosPessoais.sobrenome}`;
  dadosPessoais[novaChave] = nomeCompleto;
  console.log(dadosPessoais);
