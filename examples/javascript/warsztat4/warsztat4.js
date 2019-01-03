/* Napisz funkcję która przyjmuje trzy parametry liczbowe. Funkcja zwróci sumę tych liczb. Wynik działania funkcji wyświetl w konsoli.*/

function addThreeNumber(num1, num2, num3) {
    let result = num1+num2+num3;
    return result;
    
}

console.log(addThreeNumber(2,3,4));
console.log(addThreeNumber(2,2,Math.pow(2,2)));
console.log(addThreeNumber(2,3,addThreeNumber(1,2,3)));