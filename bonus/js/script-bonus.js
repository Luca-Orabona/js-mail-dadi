// SOMMA SOLO NUMERI PARI

const numeri = [2, 5, 8, 3, 10, 7];

let somma = 0;

for ( let i = 0; i < numeri.length; i++) {

    if (numeri[i] % 2 === 0) {

        somma = somma + numeri[i];
    }
}

console.log(somma);



// CONTA QUANTE VOLTE APPARE UN VALORE

const colori = ["rosso", "blu", "rosso", "verde", "rosso"];

let checkRosso = [];

for (let i = 0; i < colori.length; i++) {

    if (colori[i] === "rosso") {
        checkRosso.push(colori[i]);
    }
}

console.log(checkRosso.length);

// const colori1 = ["rosso", "blu", "rosso", "verde", "rosso"];

// let conteggioRosso1 = 0;

// for (let i = 0; i < colori1.length; i++) {

//     if (colori1[i] === "rosso") {
//         conteggioRosso1++
//     }
// }

// console.log(conteggioRosso1);


// INVERTI UN ARRAY

const input = [1, 2, 3, 4];

const inputReverse = [];

for (let i = input.length - 1; i >= 0; i--) {

    inputReverse.push(input[i]);
}

console.log(inputReverse)


// TROVA IL MINIMO

const numeri2 = [45, 2, 89, 3, 22];

// const numeroMinimo = Math.min(...numeri2);
// console.log(numeroMinimo)


let minimo = numeri2[0];

for (let i = 1; i < numeri2.length; i++) {

    if (numeri2[i] < minimo) {
        minimo = numeri2[i];
    }

}

console.log(minimo);



// SOMMA DEGLI INDICI DISPARI  

const arr = [10, 20, 30, 40, 50, 60];

let somma2 = 0;

for (let i = 0; i < arr.length; i++) {
    
    if (i % 2 !== 0) {
        somma2 = somma2 + arr[i];
    }
}

console.log(somma2);


// DIFFERENZA TRA MAX E MIN 

const numeri3 = [5, 12, 3, 20, 8];

let numMax = numeri3[0];
let numMin = numeri3[0];

for (let i = 1; i < numeri3.length; i++) {

    if (numeri3[i] > numMax) {
        numMax = numeri3[i];
    }

    if (numeri3[i] < numMin) {
        numMin = numeri3[i];
    }
}

let differenza = numMax - numMin;
console.log(differenza);


//CONTA BOOLEANI VERI

const flags = [true, false, true, true, false];

let numElementTrue = 0;

for (let i = 0; i < flags.length; i++) {

    if (flags[i] === true) {
        numElementTrue++
    }
}


console.log(numElementTrue);


// ARRAY CON DOPPI

const numeri4 = [1, 2, 3, 4];

let numeri4Doppio = [];

for (let i = 0; i < numeri4.length; i++) {

    numeri4Doppio.push(numeri4[i] * 2);
}

console.log(numeri4Doppio);



// CONTA LE VOCALI IN UNA PAROLA

const parola = "elefante";


const vocali = "aeiouAEIOU";

let numVocali = 0;

for (let i = 0; i < parola.length; i++) {

   if  (vocali.includes(parola[i])) {

       numVocali++
   }
}

console.log(numVocali);



//RIMUOVI DUPLICATI

const input3 = [1, 2, 2, 3, 1, 4];

const noDuplicati = [];

for (let i = 0; i < input3.length; i++) {

    if (!noDuplicati.includes(input3[i])) {
        noDuplicati.push(input3[i]);
    }
}

console.log(noDuplicati);


// MEDIA NUMERI + NUMERI MAGGIORI DELLA MEDIA

const numeri5 = [5, 10, 15, 20, 25];

let somma1 = 0;
for (let i = 0; i < numeri5.length; i++) {
    
    somma1 = somma1 + numeri5[i];
}

let media = somma1 / numeri5.length;
console.log(media);


let nummMaggioriMedia = 0;

for (let i = 0; i < numeri5.length; i++) {
    
    if (numeri5[i] > media ) {
        nummMaggioriMedia++
    }
}

console.log(nummMaggioriMedia);


// SOMMA DELLE CIFRE DI UN NUMERO

const numero = 472;

const numeroStr = numero.toString();

let somma3 = 0;

for (let i = 0; i < numeroStr.length; i++) {

    let curNumero = parseInt(numeroStr[i]);

    somma3 = somma3 + curNumero;
    
  
    
    // somma3 = somma3 + numeroStr[i];
}

console.log(somma3);



// SECONDO NUMERO PIU' GRANDE

const numeri6 = [10, 40, 30, 20];

let max = -Infinity
let secondMax = -Infinity

for (let i = 0; i < numeri6.length; i++) {

    if (numeri6[i] > max) {
        secondMax = max;
        max = numeri6[i];
    } else if (numeri6[i] > secondMax && numeri6[i] < max) {
        secondMax = numeri6[i];
    }
}

console.log(secondMax);


// SOMMA DEI NUMERI DISPARI IN UN ARRAY MISTO

const dati = [3, "ciao", 4, true, 7, 2];

let somma4 = 0;

for (let i = 0; i < dati.length; i++) {

    if (typeof dati[i] === 'number' && dati[i] % 2 !== 0) {

        somma4 = somma4 + dati[i];
    }
}

console.log(somma4);


// TROVA LA PAROLA PIU' LUNGA

const parole = ["sole", "albero", "casa", "elefante"];

let parolaPiùLunga = parole[0];

for (let i = 1; i < parole.length; i++) {

    if (parole[i].length > parolaPiùLunga.length) {

        parolaPiùLunga = parole[i];
    }
}

console.log(parolaPiùLunga);


// VERIFICA SE L'ARRAY E' ORDINATO IN MODO CRESCENTE

const numeri7 = [1, 2, 3, 4, 5];

let ordineCrescente = true;

for (let i = 0; i < numeri7.length - 1; i++) {

    if (numeri7[i] > numeri7[i + 1]) {

        ordineCrescente = false;

    }
}

console.log(ordineCrescente);



const altri = [1, 3, 2];

let ordineCrescente2 = true;

for (let i = 0; i < altri.length - 1; i++) {

    if (altri[i] > altri[i + 1]) {

        ordineCrescente2 = false;

    }
}

console.log(ordineCrescente2);



// SOMMA DELLE POSIZIONI PARI MA SOLO SE IL NUMERO E' DISPARI

const arr1 = [1, 4, 3, 6, 5, 8];

let somma5 = 0;

for (let i = 0; i < arr1.length; i++) {

    if (i % 2 === 0 && arr1[i] % 2 !== 0) {

        somma5 = somma5 + arr1[i];
    }
}

console.log(somma5)