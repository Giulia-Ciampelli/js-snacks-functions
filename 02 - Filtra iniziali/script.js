/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// come stampare solo le stringa?

// Dichiara la funzione qui.
function letterFinder(letter) {

    for (i = 0; i < names.length; i++) {
        let result = Array.from(letter);
        
        if (names[i].charAt(0) === letter) {
            result.push(names[i]);
        }
        console.log(result);
    }
}

// Invoca la funzione qui e stampa il risultato in console
letterFinder('A');

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]