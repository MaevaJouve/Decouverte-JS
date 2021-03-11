// you can write js here

console.log('exo-5');

const input = 'Turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

const resultArray = [];

// La méthode renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.
for (let j = 0; j < input.length; j++) {
    if(vowels.indexOf(input[j])>=0) {
        resultArray.push(input[j]);
    }
}

// for (let j = 0; j < input.length; j++) {
//     for (let k = 0; k < vowels.length; k++) {
//         if (input[j] === vowels[k]) {
//             resultArray.push(input[j]);
//         }
//     }
// }

console.log(resultArray.join('').toUpperCase());

