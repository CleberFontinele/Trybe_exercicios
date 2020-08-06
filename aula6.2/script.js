const state = document.querySelector('#estado');
const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;

function createListStates() {
    for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = value;
    option.innerHTML = states[index];
    state.appendChild(option);
    value += 1;
  }
}
createListStates();

// const email = document.querySelector('#email');

// function validateEmail(email)
// {
//  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
//  if (reg.test(email)){
//  return true; }
//  else{
//  return alert('Digite um email valido!');
//  }
// } 
// email.addEventListener('blur', validateEmail)

new window.JustValidate('.formulario', {
  Rules: {
    email: {
        required: true,
        email: true
    },
   
}
});