// Chiediamo all'utente il suo nome, il suo cognome e il suo colore preferito e comunichiamo la password generata

// Chiediamo il nome all'utente
const firstName = prompt(`Come ti chiami?`);

console.log(firstName, typeof(firstName));

// Chiediamo il cognome all'utente
const surName = prompt(`Qual è il tuo cognome?`);

console.log(surName, typeof(surName));

// Chiediamo all'utente il colore preferito
const favoriteColor = prompt(`Qual è il tuo colore preferito?`);

console.log(favoriteColor, typeof(favoriteColor));

// Creazione password concatenando informazioni

const result = firstName + surName + favoriteColor+ 21;

console.log(result);

const message = `La tua password è ${result}`;

// OUTPUT
// Mostrare all'utente la password generata 

document.getElementById(`password`).innerHTML = message;