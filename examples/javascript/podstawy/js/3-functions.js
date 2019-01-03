/*Funkcje w JavaScript - deklaracja */

addNumbers();

function addNumbers() {
    console.log(2 + 2);
}

addNumbers(); //Wywołanie funkcji 
addNumbers();
addNumbers();


//printName(); nie da się
const printName = function() {
    console.log("Łukasz");
}


printName();

/*Funkcje w JavaScript - parametry*/

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(5, 7);
addTwoNumbers(10, -100);
addTwoNumbers(13, 7);

/* Funkcje w JavaScript - zwracanie wartości*/
function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

let result = addThreeNumbers(1,2,3);
console.log(result);




/* Napisz funkcję która przyjmuje dwa parametry - wzrost w metrach  i wagę w kg - funkcja zwraca wartość wskaźnika BMI obliczonego na podstawie wzoru masa/wzrost^2 */

function countBmi(weight, height) {
    let bmi = weight/(height*height)
    return bmi;
}

let myBmi = countBmi(56, 1.64);
console.log(myBmi);

console.log("Mój BMI to " + countBmi(70, 1.8));

console.log(countBmi(70));


/* Funkcje strzałkowe */

const add = () => {
    console.log(2+2);
}

add(); 

const devide = (num1, num2) => {
    return num1/num2;
}

console.log(devide(4,2));


const squareArea = a => a*a;

/*
function squareArea(a) {
    return a*a;
}
*/

console.log(squareArea(10));









