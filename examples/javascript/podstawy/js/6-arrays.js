/* Definiowanie tablic*/

let names = ["Adam", "Kasia", "Piotr"];

console.log(names);

console.log(names[1]);


names[1] = "Krzysztof";

console.log(names[1]);

names[3] = "Anna";
console.log(names);

/* Metody tablicowe */

names.push("Jan");
console.log(names);

names.pop();
console.log(names);

names.unshift("Ola");
console.log(names);

names.shift();
console.log(names);

console.log(names.join());
console.log(names.join("+"));
console.log(names.join(""));

names.reverse();
console.log(names);

names.sort();
console.log(names);


let arrayInArray = [['Adam', 'Nowak'], ['Łukasz',"Badocha"], ['Tadeusz','Kowalski']];

console.log(arrayInArray[1][1]);

let numbers = [1,2,3,4,5];
let findedValues = numbers.find(function(elem){
                               return elem < 3;
                               })
console.log(findedValues);

/* metoda map i filter*/

/*  Długość tablic */
console.log(names.length);
















