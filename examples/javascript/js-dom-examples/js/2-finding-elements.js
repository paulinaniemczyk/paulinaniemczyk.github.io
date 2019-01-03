
/*  Znajdowanie elementu za pomocą id */

let sectionAbout = document.getElementById('about');

console.log(sectionAbout);

sectionAbout.style.backgroundColor = "gray";


/* Znajdowanie elementów po klasie */

let listItems = document.getElementsByClassName('list-item');

console.log(listItems);

listItems[2].style.backgroundColor = "red";

for(let i = 0; i<listItems.length; i++){
    
    if(i%2 == 0) continue;
    
         listItems[i].style.backgroundColor = 'pink';
     }
let aboutHeading = document.getElementsByClassName('about-heading');

console.log(aboutHeading)
aboutHeading[0].style.backgroundColor = "green ";


/*   Znajdowanie elementów po znaczniku */

let links = document.getElementsByTagName('a');

console.log(links);


/* Znajdowanie elementów po selektorze */


let usersList = document.querySelector('.users');
console.log(usersList);

let usersItems = document.querySelectorAll('.user-item');

console.log(usersItems);

/*
let usersItems = document.querySelectorAll('.users li');

console.log(usersItems);*/

/* query selector jest wolniejszy bo musi sprawdzić po wszystkich elementach  */



















