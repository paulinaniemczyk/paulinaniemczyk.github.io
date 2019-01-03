/*   Warunek  if  */

let userOneAge = 15;
let userTwoAge = 15;

if (userOneAge>userTwoAge) {
    console.log("Pierwszy jest starszy");
}

/*  Warunek if-else */

if (userOneAge>userTwoAge) {
    console.log("Pierwszy jest starszy");
}else
 { 
     console.log("Drugi jest starszy");
 }

/*  Warunek else if */

if(userOneAge>userTwoAge) {
    console.log("Pierwszy jest starszy");
} else if(userOneAge==userTwoAge) {
     console.log("Są w tym samym wieku");
 } else if(userOneAge<userTwoAge) {
     console.log("Drugi jest starszy");
 }
/*  Instrukcja swith */

let lightColor = 'black';

switch(lightColor) {
    case "red":
        console.log("stój");
        break;
    case "yellow":
        console.log("czekaj");
        break;
    case "green":
        console.log("jedź");
        break;
    default:
        console.log("uważaj, światła zepsute");
}





