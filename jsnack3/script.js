
//singolo input dell'utente
let userNum;
//risultato di tutti i valori inseriti dall'utente
let result = 0;
//tiene traccia di tutti i valori inseriti dall'utente
let allNumbers = '';


for(let i=0; i<10; i++){
    //trasforma la stringa dell'input tramite prompt in valore numerico
    userNum = parseFloat(prompt('Inserisci 10 numeri, uno alla volta'));
    //somma dei valori
    result = result + userNum;

    //controllo per la costruzione della stringa contenente i valori precedentemente inseriti per mostrarli a schermo
    if (i == 0){
        allNumbers += `${userNum}`;
    }else{
        allNumbers += ` + ${userNum}`;
    }
    
}
//output
document.writeln(`Il risultato di ${allNumbers} è: ${result}`);

