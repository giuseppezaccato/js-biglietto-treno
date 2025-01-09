//----------TASK 1----------
//------RACCOLTA DATI DALL'UTENTE
//  -km richiesti per il viaggio 
//  -età del passeggero

// ricorda sempre di fare in modo che i dati raccolti vengano trasformati in numeri,
//  o almeno fai un controllo in modo che lo diventino (parseInt)

const age = parseInt(prompt("scrivi qui l'età del passeggero", 35))
const km = parseInt(prompt("aggiungi qui quanti km intendi percorrere per sapere quanto costerà il tuo biglietto", 120))
let price = km * 0.21


//----------TASK 2----------
//-----SCONTO APPLICATO IN BASE A ETà PASSEGGERO
// IF < 18 = sconto 20%
// ELSE IF >= 65 = sconto 40%
// ELSE = prezzo pieno
// ricorda in ogni caso di SOVRASCRIVERE il prezzo prima di fare il log,
// richiamando la variabile, e non SOLO dandogliela nella condizione di IF

if (age < 18) {
    let price20 = price - (price * 0.2)
    console.log(`in quanto minorenne costo biglietto =  ${price20} € `)
    // alert("il prezzo del biglietto è di" + " " + price20.toFixed(2) + " €")

} else if (age >= 65) {
    let price40 = price - (price * 0.4)
    console.log(`in quanto over 65 costo biglietto = ${price40} €`)
    // alert("il prezzo del biglietto è di" + " " + price40.toFixed(2) + " €")

} else {
    console.log(`il prezzo del biglietto è di ${price} €`)
    // alert("il prezzo del biglietto è di" + " " + price.toFixed(2) + " €")

}







