// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(Object.keys(joeInfo.cars).length);
// keys : Un tableau de chaînes de caractères qui sont les noms des propriétés énumérables de l'objet passé en argument.

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 5;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

var team = {
    players: [
        {
            firstName: 'Pablo',
            lastName:'Sanchez',
            age: 11
        },
        {
            firstName: 'Ricardo',
            lastName:'Manuel',
            age: 15
        },
        {
            firstName: 'Rick',
            lastName:'Astley',
            age: 12
        },
    ],

    games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Sioux',
            teamPoints: 52,
            opponentPoints: 20
        },
        {
            opponent: 'Dakota',
            teamPoints: 70,
            opponentPoints: 35
        },
    ],

    addPlayer : function (firstName, lastName, age) {
        this.players.push(
            {
                firstName : firstName,
                lastName : lastName,
                age : age
            }
        );
    },

    addGames : function (opponent, teamPoints, opponentPoints) {
        this.games.push(
            {
                opponent: opponent,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints
            }

        );

    },


};



// Ajouter un joueur à l'équipe
team.addPlayer('Vincenzo', 'Sanchez', 12);
team.addPlayer('David', 'Sanchez', 17);
team.addPlayer('Vincenzo', 'Ramirez', 10);

// Ajouter un match
team.addGames('Kannucks', 20, 15);
team.addGames('Maple Leafs', 60, 65);

// Somme des points de l'équipe
const arrSum = team.games.reduce((a,b) => a + b.teamPoints, 0);
console.log(arrSum);

// OU

let sum = 0;
team.games.forEach(function (game) {
    sum += game.teamPoints;
});
console.log(sum)

// Moyenne des points de l'équipe adverse
const arrAvg = team.games.reduce((a,b) => a + b.opponentPoints, 0);
let avg = arrAvg / team.games.length;

console.log(arrAvg); // total des points de l'équipe adverse
console.log(avg); // moyenne

// Joueur le plus âgé

let arrAge = team.players.reduce(function(prec, cur) {
    return (prec < cur.age) ? cur.age : prec; // condition ternaire

        // if (prec < cur.age) {
        //
        //     return cur.age
        // } else {
        //     return prec;
        // }

    },0);

console.log(arrAge);
//
console.log(team.players);
console.log(team.games)

