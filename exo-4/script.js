// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// Utiliser une méthode pour enlever le dernier élément du tableau secretMessage.
secretMessage.pop();

//Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
secretMessage.push("to", "program");

// Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
secretMessage[6] = 'right';

// Utiliser une méthode pour supprimer le premier élément du tableau.
secretMessage.shift();

// Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
secretMessage.unshift('Programming');

// Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
// ancre =5 & veut supprimer 5 éléments
secretMessage.splice(5,5, 'know')

// Utiliser la méthode .join pour afficher le message secret dans la console.
console.log(secretMessage.join(' '));
// crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau
// (ou d'un objet semblable à un tableau).
// La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.