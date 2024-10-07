/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// come cercare la prima lettera?
// .charAt()
// .substring(), con sottrazione

// Dichiara la funzione qui.
function initialLetter(array) {
    for (i = 0; i < array.length; i++) {
        let string = array[i].charAt(0);
        return string;
    }
}
console.log(initialLetter(names));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]