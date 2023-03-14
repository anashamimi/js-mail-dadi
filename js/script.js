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

const btnMail = document.querySelector('button');

btnMail.addEventListener('click', function checklist(e) {
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
        console.log(accesso);
    } else {
        accesso = 'Non sei nella lista!!!'
        document.getElementById('app').innerHTML += `<p class="text-danger">${accesso}</p>`;
        console.log(accesso);
    }
});


const btnDado = document.getElementById('btn-dadi');

btnDado.addEventListener('click', function playdice(e) {
    e.preventDefault();
    let esito = '';

    let numDadoComputer1 = getRndNumber(1 , 6);
    let numDadoComputer2 = getRndNumber(1 , 6);
    let numDadoUser1 = getRndNumber(1 , 6);
    let numDadoUser2 = getRndNumber(1 , 6);

    let sumComputer = numDadoComputer1 + numDadoComputer2;

    let sumUser = numDadoUser1 + numDadoUser2;

    console.log(sumComputer);

    console.log(sumUser);
    

    if (sumComputer > sumUser) {
        esito = 'Mi dispiace ma il computer è troppo forte :(';
    } else if (sumComputer < sumUser) {
        esito = 'Congratulazioni hai battuto il computer :)';
    } else if (sumComputer == sumUser) {
        esito = 'è un pareggio la prossima volta andrà meglio :|'
    }
    console.log(esito);

    document.getElementById('dadi-computer').innerHTML = `<div class="num-dadi d-flex align-items-center justify-content-center">${numDadoComputer1}</div>
    <div class="num-dadi d-flex align-items-center justify-content-center">${numDadoComputer2}</div>`;

    document.getElementById('dadi-user').innerHTML = `<div class="num-dadi d-flex align-items-center justify-content-center">${numDadoUser1}</div>
    <div class="num-dadi d-flex align-items-center justify-content-center">${numDadoUser2}</div>`;

    document.getElementById('messaggio').innerHTML = `<p class="text-center text-warning p-5">${esito}</p>`;
});
