/*Zasięg zmiennych w JavaScript */

function addNumbers (num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

addNumbers(10,12);

//console.log(result);
/* zmienna zdeklarowana w funkcji jest tylko w ciele funkcji ma zasięg lokalny
zmienna zdeklarowana poza funkcją ma zasięg globalny*/

function devide(num1, num2) {
    let result = num1 / num2;
    console.log(result);
}

devide(10,5);