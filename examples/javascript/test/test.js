let number = 12;

console.log(number)

number = 14;

console.log(number);


let name = 'paula';

console.log(name);

name = 'Kasia';

console.log(name);


function addOneTwo(a,b){
console.log(a+b) ;   
}

addOneTwo(5,7);
addOneTwo(54,75);
addOneTwo(105,4);


const inNa = (function() {
    console.log ("Magda");
}());


const printName = (function() {
    console.log("Łukasz");
}());


function addThreeNumber(num1,num2,num3) {
    let result = num1 + num2 + num3;
    return result;
}

let wynik = addThreeNumber(1,2,3);
console.log(wynik);

let wynikos = addThreeNumber(4,5,6);
console.log(wynikos);

/* Napisz funkcję która przyjmuje dwa parametry - wzrost w metrach  i wagę w kg - funkcja zwraca wartość wskaźnika BMI obliczonego na podstawie wzoru masa/wzrost^2 */


function countBmi (height,weight) {
    let result = weight/(height*height);
    return result;
}

let resultBmi = countBmi (1.64,55);
console.log(resultBmi);



function poleKwadratu(a) {
    return a*a;
}

console.log(poleKwadratu(2));
console.log(poleKwadratu(5));
console.log(poleKwadratu(10));




let isDone = true;

console.log(isDone);
console.log(typeof isDone);



let names = ["Adam", "Kasia", "Piotr"];

console.log(names);

console.log(names[1]);


names[1] = "Krzysztof";

console.log(names[1]);

names[3] = "Anna";
console.log(names);



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

function changetekst (tekst) {
    let result = tekst.split("");
    let arrayTekst = result.reverse();
    let response = arrayTekst.join("")
    
    return response;
}

let changeWord = changetekst("dupa");
console.log(changeWord);


function sumAndProduct (num1,num2,num3,num4,num5,num6) {
    let makeArray = ['num1','num2','num3','num4','num5','num6'];
    
    
};


    
let numbers = [1,2,3,4];
let totalAmount = 0;

for (let i = 0; i < numbers.length; i++) {

    totalAmount += numbers[i];
}

console.log(totalAmount);


function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
let array = [1,2,3,4,5]
console.log(multiply(array));

function sumAndProduct (array) {
    let totalAmount = 0;
    for (let i = 0; i < array.length; i++) {

    totalAmount += array[i];
}
    let sum=1;
    for (let i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    console.log (sum,totalAmount);
}
sumAndProduct([1,2,3,4,5]);


function sumSquare (array) {
    let totalAmount = 0;
    for (let i = 0; i < array.length; i++) {

    totalAmount += Math.pow(array[i],2);
    }
    return totalAmount;
}
console.log(sumSquare([1,2,3,4,5]));


function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}


console.log(fibonacci(5,memo));













