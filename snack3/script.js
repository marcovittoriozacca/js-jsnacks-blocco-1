//array vuoto, sarà l'utente a riempirlo con la quantità di valori desiderata
const userNumArray = [];
let sum = 0;
//conterrà il numero di iterazioni del ciclo, quindi quanti valori avrà l'array
let iteration;

iteration = parseInt(prompt('Di quanti numeri deve essere la lista?'))

for (let i = 1; i <= iteration; i++){
    //aggiungiamo ogni singolo valore da 1 al valore aggiunto dall'utente dentro l'array
    userNumArray.push(i);

    //controlliamo se quel numero, dividendolo per 2, da come risultato un valore diverso da 0 e quindi risulta essere dispari
    if(i % 2 !== 0){
        sum += i;
    }
}
//output dell'intero array 
console.log(userNumArray)
//output con la somma di tutti i valori dispari della lista
console.log(`La somma di tutti i valori dispari della lista è: ${sum}`);