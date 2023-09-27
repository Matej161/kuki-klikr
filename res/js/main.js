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

let numberofandrews = 0;

// {} - scope
// () => arrow funkce
// .onclick na kliknuti
andrew.onclick = () => {
    console.log("click")
    //numberofandrews = numberofandrews + 1;
    //numberofandrews += 1;
    //++ pricte jednicku - inkrement
    numberofandrews++;
    console.log(numberofandrews);
    counter.innerHTML  = "Andrews: " + numberofandrews;
}