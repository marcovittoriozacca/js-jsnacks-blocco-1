let userNum;
userNum = parseInt(prompt("Inserisci un numero"));

// ciclo che parte dal numero inserito dall'utente e decrementerà fino al volore 1
for(let i = userNum; i >= 1; i--){
    //stampa in console ogni valore e il valore al cubo
    //il valore al cubo è ottenuto dalla funzione Math.pow che permette di elevare a potenza il primo parametro per il secondo
    console.log(i, Math.pow(i, 3));

}
