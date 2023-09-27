//console.log(); - vypisuje do konzole
console.log("Ahoj světe");
/*
let myNumber = 16;
console.log(myNumber);
myNumber = 4;
console.log(myNumber);
const PI = 3.14;
console.log(PI);
*/

const andrew = document.getElementById("andrew");
const counter = document.getElementById("counter");
const upgradeButton = document.getElementById("upgradeButton");

let numberofandrews = 0;
let clickIncrease = 1;

// {} - scope
// () => arrow funkce
// .onclick na kliknuti
andrew.onclick = () => {
    console.log("click")
    //numberofandrews = numberofandrews + 1;
    //numberofandrews += 1;
    //++ pricte jednicku - inkrement
    numberofandrews += clickIncrease;
    console.log(numberofandrews);
    counter.innerHTML  = "Andrews: " + numberofandrews;
}

upgradeButton.onclick = () => {
    if (numberofandrews >= 50) {
        //odečtu cenu
        numberofandrews -=50;
        //numberofandrews= numberofandrews - 50 - to stejný jako nad tim;
        counter.innerHTML  = "Andrews: " + numberofandrews;
        clickIncrease++;
        //zvednutí pocet na klik
    }
}