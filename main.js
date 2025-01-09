//----------TASK 1----------
//------RACCOLTA DATI DALL'UTENTE
//  -km richiesti per il viaggio 
//  -età del passeggero

// ricorda sempre di fare in modo che i dati raccolti vengano trasformati in numeri,
//  o almeno fai un controllo in modo che lo diventino (parseInt)

const age = parseInt(prompt("scrivi qui l'età del passeggero", 35));
const km = parseInt(prompt("aggiungi qui quanti km intendi percorrere per sapere quanto costerà il tuo biglietto", 120));
let price = km * 0.21;


//----------TASK 2----------
//-----SCONTO APPLICATO IN BASE A ETà PASSEGGERO
// IF < 18 = sconto 20%
// ELSE IF >= 65 = sconto 40%
// ELSE = prezzo pieno
// ricorda in ogni caso di SOVRASCRIVERE il prezzo prima di fare il log,
// richiamando la variabile, e non SOLO dandogliela nella condizione di IF




// ------------------------------JS Assignment Operators----------------------------------------
//                          https://www.w3schools.com/js/js_operators.asp
// l'equivalente semplificato del calcolo sotto si può riassumere con le seguenti espressioni:
// price -= price * 0.2(sè stesso - price * .2);
// o ancora meglio:
// price = (price * 1) - (price * .2)=> price * (1 - .2)=> price * .8;
// price *= .8(sè stesso moltiplicato 0.8);
// ---------------------------------------------------------------------------------------------

if (age < 18) {
    price -= price * 0.2;
    console.log(`in quanto minorenne costo biglietto =  ${price.toFixed(2)} € `);
    alert("il prezzo del biglietto è di" + " " + price.toFixed(2) + " €");

} else if (age >= 65) {
    price *= .6;
    console.log(`in quanto over 65 costo biglietto = ${price.toFixed(2)} €`);
    alert("il prezzo del biglietto è di" + " " + price.toFixed(2) + " €");

} else {
    qui non c'è bisogno di dichiarare nulla perchè dovrebbe prendere il price non riassegnato, quindi il prezzo pieno per intenderci
    console.log(`il prezzo del biglietto è di ${price.toFixed(2)} €`);
    alert("il prezzo del biglietto è di" + " " + price.toFixed(2) + " €");

}







