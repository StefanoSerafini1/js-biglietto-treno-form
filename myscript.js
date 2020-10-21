//variabile che ottengono input da bottoni crea e annulla

var creab = document.getElementById('creaBiglietto');
var annulla = document.getElementById('annullaBiglietto');

//funzione che si attiva al click del bottone crea
crea.addEventListener("click", function () {
  var costob;
  var prezzoalkm = 0.21;
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var fasciaeta = document.getElementById('eta').value;
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minnumtreno = 90000;
  var maxnumtreno =100000;

  //controllo fascia d'età tramite ciclo if
  //con calcolo costo boglietto e applicazione sconto se necessario

  if (fasciaeta == "Minorenne") {
        var costob = (km * prezzoalkm - 20/100 * (km * prezzoalKm)).toFixed(2) + " euro" + "  sei minorenne è applicato uno sconto del 20%"  ;
    }else if (fasciaeta == "Over 65") {
        var costob = (km * prezzoalkm - 40/100 * (km * prezzoalKm)).toFixed(2) + " euro" + "  è stato applicato uno sconto del 40% per gli over 65";
    }else {
        var costob = (km * prezzoalkm).toFixed(2) + " euro" + "  tariffa base prezzo intero";
    }

}
