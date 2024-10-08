/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function letterFinder(letter) {
    let result = [];

    for (let i = 0; i < names.length; i++) {
        
        if (names[i].charAt(0) === letter) {
            result.push(names[i]);
        }
    }
    return result; // RICORDA: tutte le variabili nello stesso scope, o non funziona (in questo caso fuori dal loop, o restituisce solo il primo perchè return lo interrompe)
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letterFinder('A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]