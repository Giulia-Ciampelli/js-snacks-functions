/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function helloPerson() {
    // creazione varianti che prendono l'ora
    let now = new Date;
    let hour = now.getHours();
    // creazione di variabile di appoggio per evitare return multipli e rendere il codice più modificabile
    let greeting;

    // creazione if statement per verificare l'ora
    if (hour <= 13) {
        greeting = `Buongiorno ${name}`;
    }
    else if (hour >= 18) {
        greeting = `Buonasera ${name}`;
    }
    else {
        greeting = `Buon pomeriggio ${name}`;
    }
    return `${greeting}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(helloPerson());


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.