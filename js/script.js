/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const mail = [
    'anashamimi2@gmail.com', 'antonioricci@gmail.com',
    'carlomagno76@gmail.com', 'lautaromartinez10@gmail.com'
];

const btn = document.querySelector('button');

btn.addEventListener('click', function checklist(e) {
    e.preventDefault();
    let accesso = '';
    const searchMail = document.getElementById('user-mail').value;

    for (let i = 0; i < mail.length; i++) {
        if (mail[i] === searchMail) {
            accesso = mail[i];
        }
    }

    if (accesso) {
        accesso = 'Benvenuto!!!'
        document.getElementById('app').innerHTML += `<p>${accesso}</p>`;
        console.log('Benvenuto');
    } else {
        accesso = 'Non sei nella lista!!!'
        document.getElementById('app').innerHTML += `<p class="text-danger">${accesso}</p>`;
        console.log('Non sei nella lista');
    }
});