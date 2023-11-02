
let budget = parseFloat(prompt("Hoeveel geld heb je?"));
let productPrijs = 60; 
let saldo = document.getElementById("Resultaat");

if (!isNaN(budget)) {
    if (budget >= productPrijs) {
        let over = budget - productPrijs;
        saldo.innerHTML = "Je hebt genoeg geld! " + over + " euro is er over van " + budget + " euro.";
        saldo.style.color = "green";
    } else {
        saldo.innerHTML = "Helaas, je hebt te weinig geld!";
        saldo.style.color = "red";
    }
} else {
    saldo.innerHTML = "Ongeldige invoer. Voer een geldig bedrag in.";
    saldo.style.color = "red";
}
