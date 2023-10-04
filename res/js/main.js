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
//! konstanta je neco co se nemuze menit
//! promenna je vymezeny misto pameti v pocitaci, muzeme do nich davat cisla, upravovat, mazat, číst
const andrew = document.getElementById("andrew");
const counter = document.getElementById("counter");
const upgradeButton = document.getElementById("upgradeButton");
const autoclick = document.getElementById("Autoclick");

//! promenna se muze menit
let numberofandrews = 0;
let clickIncrease = 1;
let autoclickIncrease = 0;
let autoclicker;
let autoclickerPrice = 100;

//! {} - scope
//! () => arrow funkce
//! .onclick na kliknuti
andrew.onclick = () => {
  console.log("click");
  //! numberofandrews = numberofandrews + 1;
  //! numberofandrews += 1;
  //! ++ pricte jednicku - inkrement
  numberofandrews += clickIncrease;
  console.log(numberofandrews);
  counter.innerText = "Andrews: " + numberofandrews;
};

upgradeButton.onclick = () => {
  if (numberofandrews >= 50) {
    //*odečtu cenu
    numberofandrews -= 50;
    //!numberofandrews= numberofandrews - 50 - to stejný jako nad tim;
    counter.innerText = "Andrews: " + numberofandrews;
    clickIncrease++;
    //*zvednutí pocet na klik
  }
};
autoclick.onclick = () => {
  if (numberofandrews >= autoclickerPrice) {
    //*odectu cenu
    numberofandrews -= autoclickerPrice;
    //*aktualizuju odstavec
    counter.innerText = "Andrews: " + numberofandrews;
    autoclickerPrice += 100;
    autoclick.innerText = "Buy autoclicker: " + autoclickerPrice;
    //*zvedne autoclicker
    autoclickIncrease++;
    //*zastaveni intervalu
    clearInterval(autoclicker);
    //*-opakovani po case pro pridani andrew
    autoclicker = setInterval(() => {
      numberofandrews += autoclickIncrease;
      counter.innerText = "Andrews: " + numberofandrews;
    }, 1000);
  }
};
const turnOnCheats = () => {
  numberofandrews += 1000000;
  counter.innerText = "Andrews: " + numberofandrews;
};
turnOnCheats();

function turnOnSuperCheats() {
  numberofandrews += 10000000;
  counter.innerText = "Andrews: " + numberofandrews;
}
turnOnSuperCheats();
