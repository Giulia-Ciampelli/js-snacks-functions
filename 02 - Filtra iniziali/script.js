/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// metodo: needle e haystack?
// .includes()

// Dichiara la funzione qui.
let result = 'a';

function findName(haystack, needle) {
    for (i = 0; i < haystack.length; i++) {
        needle = haystack[i];

        if (needle = needle.includes(result)) {
            return true;
        }
        return false;
    }
}
// Invoca la funzione qui e stampa il risultato in console
console.log(findName(names, result));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]