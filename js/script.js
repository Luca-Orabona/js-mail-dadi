// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// EMAIL


const userEmail = prompt("Scrivi la tua email!", "chiara.bianchi07@mail.net");

const emailList = ["luca.rossi82@email.com", "sara.fontana88@webmail.com", "francesco.morini09@cloudmail.it", "chiara.bianchi07@mail.net", "lucaorabona@gmail.com", "martina.ferrari42@protonmail.com"];

let email = false; // ancora non lo abbiamo trovato

for (let i = 0; i < emailList.length; i++) {
    console.log(emailList[i]);
    if (userEmail === emailList[i]) {
        email = true; // vuol dire che l'abbiamo trovato
    }
}

console.log(email ? 'Email trovata' : 'Email non trovata');




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// DADI

const user = Math.floor(Math.random() * 6) + 1;
const computer = Math.floor(Math.random() * 6) + 1;
console.log(user, computer);

let winner = 'pareggio';

if (user > computer) {
    winner = "Il vincitore è user.";
} else if (user < computer) {
    winner = "Il vincitore è computer.";
}

console.log(winner);