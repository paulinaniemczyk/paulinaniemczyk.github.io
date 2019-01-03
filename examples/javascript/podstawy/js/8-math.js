/* Właściwości obiektu Math */


console.log(Math.PI);
console.log(Math.E);

/*  Metody obiektu  Math */

console.log(Math.pow(2, 8));
console.log(Math.random()*10);

/* Napisz funkcję która przyjmuje jeden parametr - promień koła. Funkcja zwraca pole koła liczone wg wzoru PI*r^2   */



function circleArea(r) {
    return Math.PI * Math.pow(r,2);
}
console.log(circleArea(1));
console.log(circleArea(2));
console.log(circleArea(3));