/* Typ liczbowy */

let age = 31;

console.log(age);
console.log(typeof age);

/* Typ łańcuchowy */

let name = 'Luke\'s car is black';
let quote = '"Alea iscta est"'
let sentence = "Juliusz Cezar powiedział: " + quote + "i się zatrzymał";
let sentence2 = `Juliusz Cezar powiedział ${quote} i poszedł dalej`; //ES6

console.log(name);
console.log(typeof name);

console.log(sentence);
console.log(sentence2);

/* Typ logiczny */

let isDone = true;

console.log(isDone);
console.log(typeof isDone);

/* Typy specjalne */
let isNull = null;
let isUndefined;
let isZero = 0;


/* Pułapki typowania */

console.log("2"+2);
console.log("2"-2);

console.log(true+17);
console.log(false+17);




