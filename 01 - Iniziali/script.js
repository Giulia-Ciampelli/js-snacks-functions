/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// metodi:
// split
// for loop?
// bisogna prendere ogni stringa (in un for loop), usare .split() per dividerla in singole lettere e prendere solo la prima (forse con break?)

// Dichiara la funzione qui.
function initialLetter(word) {
    let initial = word.split('');
    return initial;
}
console.log(initialLetter('Anna'));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]