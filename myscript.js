//variabile che ottengono input da bottoni crea e annulla

var creab = document.getElementById('creab');
var annulla = document.getElementById('annullab');

//funzione che si attiva al click del bottone crea
creab.addEventListener("click", function () {
  var costob;
  var prezzoalkm = 0.21;
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var fasciaeta = document.getElementById('eta').value;
  var mincarrozza = 1;
  var maxcarrozza = 20;
  var minnumcp = 90000;
  var maxnumcp =100000;

  //controllo fascia d'età tramite ciclo if
  //con calcolo costo boglietto e applicazione sconto se necessario

  if (fasciaeta == "Minorenne") {
        var offerta='Sconto minorenne';
        var costob = (km * prezzoalkm - 20/100 * (km * prezzoalkm)).toFixed(2) + " €";
    }else if (fasciaeta == "Over 65") {
        var offerta='sconto over 65';
        var costob = (km * prezzoalkm - 40/100 * (km * prezzoalkm)).toFixed(2) + " €";
    }else {
        var offerta='Prezzo intero';
        var costob = (km * prezzoalkm).toFixed(2) + " €";
    }
    //calcolo num cp e carrozza random usando funz math random e usando valori minimi  massimali

    var codicecp = Math.floor(Math.random()*(maxnumcp - minnumcp + 1)) + minnumcp;
    var carrozza = Math.floor(Math.random()*(maxcarrozza - mincarrozza + 1)) + mincarrozza;

    //stampa su html dei valori della tab
    document.getElementById('passeggero').innerHTML = nome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codicecp').innerHTML = codicecp;
    document.getElementById('costob').innerHTML = costob;
    //classe per css
    document.getElementById('biglietto').className = "show";

});

//funzione annulla valori inseriti tramite button annulla
annullab.addEventListener("click", function () {
    document.getElementById('biglietto').className = "vuota";
    document.getElementById('nome').value = "";
    document.getElementById('km').value = "";
    document.getElementById('carrozza').innerHTML = "";
    document.getElementById('codicecp').innerHTML = "";
    document.getElementById('costob').innerHTML = "";

})
