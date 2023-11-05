/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let j = pets.sort();
console.log(j)


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let k = 0; k < pets.length - 1; k++) {
  for (let i = 0; i < pets.length - 1; i++) {
    if (pets[i] < pets[i + 1]) {
      const temp = pets[i]
      pets[i] = pets[i + 1]
      pets[i + 1] = temp
    }
  }
  console.log(pets)
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const temp = pets[0]
pets.shift()
pets.push(temp)
console.log(pets)


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],

  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licencePlate = "AA00" + i + "AA"
}
console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const car = {
  brand: 'Mercedes',
  model: 'Class-A',
  licencePlate: "AA003AA",
  color: 'gray',
  trims: ['amg', 'shootingbrake'],
}
cars.push(car)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const positionArray = []
for (let m = 0; m < charactersArray.length; m++) {
  switch (charactersArray[m]) {
    case 'a':
      positionArray.push(1)
      break;
    case 'b':
      positionArray.push(2)
      break;
    case 'c':
      positionArray.push(3)
      break;
    case 'd':
      positionArray.push(4)
      break;
    case 'e':
      positionArray.push(5)
      break;
    case 'f':
      positionArray.push(6)
      break;
    case 'g':
      positionArray.push(7)
      break;
    case 'i':
      positionArray.push(8)
      break;
    case 'j':
      positionArray.push(9)
      break;
    case 'k':
      positionArray.push(10)
      break;
    case 'l':
      positionArray.push(11)
      break;
    case 'm':
      positionArray.push(12)
      break;
    case 'n':
      positionArray.push(13)
      break;
    case 'o':
      positionArray.push(14)
      break;
    case 'p':
      positionArray.push(15)
      break;
    case 'q':
      positionArray.push(16)
      break;
    case 'r':
      positionArray.push(17)
      break;
    case 's':
      positionArray.push(18)
      break;
    case 't':
      positionArray.push(19)
      break;
    case 'u':
      positionArray.push(20)
      break;
    case 'v':
      positionArray.push(21)
      break;
    case 'w':
      positionArray.push(22)
      break;
    case 'x':
      positionArray.push(23)
      break;
    case 'y':
      positionArray.push(24)
      break;
    case 'z':
      positionArray.push(25)
      break;
  }
}
console.log(positionArray)
