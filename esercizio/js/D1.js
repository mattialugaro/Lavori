/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype di javascript si divono in due: primitivi e complessi.
  A loro volta i primitivi si dividono in: numeri, stringhe, booleani, null e undefined.
  numeri: i quali possono essere interi (1, 96, 194, ...), decimali (5.4, 19.6, ...) oppure negativi (-7, -49, ...).
  stringhe: un insieme di caratteri delimitati da "" oppure ''.
  booleani: solo due tipi di valori true o false.
  null: unico valore possibile è null, che è diverso da tutti i precedenti.
  undefined: prevede solo un valore che è undefined, rappresenta un valore che non esiste.
  al contrario i complessi possono essere: oggetti, ad esempio funzioni, array, ecc.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* var name = 'mattia'; "mattia" */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*  var x = 12 + 20; */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* var x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

  /*
    name = 'lugaro';
    const nome = 'mattia';
    nome = 'lugaro';
    console.log(nome);
    Uncaught TypeError: Assignment to constant variable.
  */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* var result = 4 - x; */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*      var name1 = 'john';
        var name2 = "John";
        var result = name1 == name2;
        var result2 = name1 == name2.toLowerCase();
        console.log('name1= ' + name1 + ' name2=' + name2 + ' ,uguaglianza tra name1 e name2 è =' + result);
        console.log('name1= ' + name1 + ' name2=' + name2 + ' ,uguaglianza tra name1 e name2 trasformato in lowercase è =' + result2);
        console.log(name1 == name2);
        console.log(name1 == name2.toLowerCase());
*/
