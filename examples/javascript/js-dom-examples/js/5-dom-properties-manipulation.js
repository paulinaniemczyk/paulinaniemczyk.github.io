
let mainHeading = document.querySelector('h1');



/* Manipulacja zawartością   */


mainHeading.innerHTML = "Nowa <span> zawartość </span> ";
mainHeading.innerText = "Jeszcze <span> nowsza </span> zawartość ";

/* innet html zastępuje całość 
document.querySelector('.users').innerHTML = '<li class = "user-item">User 11</li>"'*/

//mainHeading.outerHTML = '<h2> Nowy nagłówek h2</h2>';

console.log(document.querySelector('.about-heading').innerText);

/*   Manipulacja atrybutami */

document.querySelector('.first a').href = 'https://google.com';

console.log(document.querySelector('.first a').id);

document.querySelector('.first a').classList.add('first-link');
document.querySelector('.first a').classList.add('new-class');
document.querySelector('.first a').classList.remove('first-link');



document.querySelector('.first a').style.fontSize = '3em';




