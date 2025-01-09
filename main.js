// fase preparatoria di raccolta dati dall'utente
// -km richiesti per il viaggio come primo let 
// -età del passeggero come secondo let

// ricorda sempre di fare in modo che i dati raccolti vengano trasformati in numeri,
//  o almeno fai un controllo in modo che lo diventino (parseInt)

const age = parseInt(prompt("scrivi qui l'età del passeggero", 35))
const km = parseInt(prompt("aggiungi qui quanti km intendi percorrere per sapere quanto costerà il tuo biglietto", 120))
let price = km * 0.21

// //sconto applicato in base all'età del passeggero
// IF < 18 = price * 0.2
// ELSE IF >= 65 = price * 0.4
// ELSE = price
// ricorda in ogni caso di SOVRASCRIVERE ilprezzo prima di fare il log, richiamando la variabile,
// e non solo dandogliela nella condizione di IF





