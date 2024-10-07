/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function letterFinder(letter) {

    for (i = 0; i < names.length; i++) {
        let result = [];
        
        if (names[i].charAt(0) === letter) {
            result.push(names[i]);
        }
        console.log(result);
    }
}

// Invoca la funzione qui e stampa il risultato in console
letterFinder('A');

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]