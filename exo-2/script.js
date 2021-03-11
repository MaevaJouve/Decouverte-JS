// you can write js here
console.log('exo-2');

const isTesting = true;

const myDate = new Date();
// console.log(myDate);

let weekDay = myDate.getDay();
// console.log(weekDay);

let hours = myDate.getHours();
// console.log(hours);

const week = 'au boulot !';
const weekEnd = 'Au dodo !';

if (isTesting) {
    weekDay = prompt('jour ?');
    hours = prompt('heure?');
}

function semaine(weekDay, hours) {

        if (weekDay <= 1 && hours < 9 || weekDay >= 5 && hours >= 17 || weekDay > 5 || weekDay < 1) {
            console.log(weekEnd);
        } else {
            console.log(week)
        }
}

semaine(weekDay, hours);

