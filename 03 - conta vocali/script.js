/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vowelCount(word) {
    // variabile con parti da cercare (vocali)
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    // creazione nuovo conto
    let count = 0;
    // creazione nuovo array per memorizzare le vocali trovate
    let vowelFound = [];
    // loop for per verificare in tutta la stringa di word
    for (i = 0; i < word.length; i++) {
        // if statement per verificare se incrementare il conto e cosa stampare nel nuovo array
        if (vowel.includes(word[i])) {
            count++;
            vowelFound.push(word[i]);
        }
    }
    console.log(`${count} (${vowelFound})`);
}

// Invoca la funzione qui e stampa il risultato in console
vowelCount(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)