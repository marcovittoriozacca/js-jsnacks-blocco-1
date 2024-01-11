//array di nomi
const nomi = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
    "Katie",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia"
  ];

//array di cognomi
  const cognomi = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Miller",
    "Davis",
    "García",
    "Rodriguez",
    "Martínez",
    "Hernández",
    "López",
    "González",
    "Perez",
    "Moore"
  ];
  

  let indexArrayNome, indexArrayCognome;

  //array che conterrà i nomi e cognomi uniti randomicamente
  const nomiEcognomi = [];

  for (let i = 0; i < nomi.length; i++) {

    //genera dei valori randomici
    indexArrayNome = Math.floor(Math.random()* nomi.length);
    indexArrayCognome = Math.floor(Math.random()* cognomi.length);
    //ogni valore verrà poi associato a una posizione dei rispettivi array
    
    //uniamo le due posizioni degli array e le inseriamo nel terzo chiamato nomiEcognomi
    nomiEcognomi.push(`${nomi[indexArrayNome]} ${cognomi[indexArrayCognome]}`);

  }
  //output del nuovo array contenente nomi e cognomi generati randomicamente
  console.log(nomiEcognomi);



