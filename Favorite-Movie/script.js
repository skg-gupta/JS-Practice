
let movieName = "PK";

let pmt = prompt("Guess Movie Name  Or For Quit enter Exit");

while( (pmt != movieName)){
    if(pmt == "Exit"){
        break;
    }

    pmt = prompt(" No! not matched  Guess Movie Name  Or For Quit enter Exit");



}


if(pmt == movieName){
    alert(` Congrats!   You find It  name was ${movieName}`);
}
else{
    alert(` Better Luck Try again!  name was ${movieName}`);
}
