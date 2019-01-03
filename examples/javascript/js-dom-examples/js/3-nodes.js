/*  Węzły rodzica */

let usersList = document.querySelector('.users')

console.log(usersList.parentElement);

usersList.parentElement.classList.add('users-container')

/* Węzły potomstwa */

console.log(usersList.childNodes);
console.log(usersList.children);

usersList.children[0].innerText = 'Nowy Tekst';


console.log(usersList.firstElementChild);
console.log(usersList.lastElementChild);


/*  Węzły rodzeństwa  */
console.log(usersList.previousElementSibling);
console.log(usersList.nextElementSibling);





