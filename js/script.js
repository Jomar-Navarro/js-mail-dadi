console.log('js-mail-dadi');

// Creo una variabile che chiede l'email dell'utente
const mail = prompt('Inserisci la tua Email: ');

// Creo un array con diverse email
const listaMail = ["ciao@lol.com", 'acbd@hey.it', 'ken@gmail.com'];

// Creo un ciclo che mi verifichi se l'email é all'interno della lista
for (let i = 0; i < listaMail.length; i++) {
  let emailEsistente = false
  if (listaMail[i] === mail){
    emailEsistente = true;
    console.log('Accedi');
  }else{
    console.log('Devi registrarti');
  }
  console.log(listaMail);
}