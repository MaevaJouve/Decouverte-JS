// you can write js here
console.log('hello from file');

// var kelvins = 294;

var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
var celsius = kelvins - 273; // La variable celsius récupère la valeur de la variable kelvins et lui soustrait 273
var fahrenheits = Math.floor(celsius * (9/5) + 32); // La variable celsius récupère la valeur de la variable celsius et le multiplie par 9 divisé par 5 et ajoute 32 - Le tout arrondi à l'entier inférieur le plus proche

console.log(kelvins);
console.log(celsius);
console.log(fahrenheits);
