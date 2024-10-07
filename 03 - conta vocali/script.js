/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// metodi
// .includes(a e i o u)
// conto dentro il conto
// metodo trovato per esercizio precedente: crea nuovo array per memorizzare le vocali trovate

// Dichiara la funzione qui.
function vowelCount(word) {
    // crea variabile che abbia le parti da cercare (vocali)
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    // cerca metodo per verificare che le parti da cercare corrispondano
    for (i = 0; i < word.length; i++) {
        if (vowel.includes(word[i])){
            count++;
        }
    }
    // verifica se le vocali corrispondono al nuovo array
    if ()

    // stampa il risultato
    console.log(count);
}

// Invoca la funzione qui e stampa il risultato in console
vowelCount(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)