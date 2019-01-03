/*  Tworzenie elementów */

let userItem = document.createElement('li');

let textNode = document.createTextNode('User 11');

userItem.appendChild(textNode);


userItem.setAttribute("class", 'user-item');

/* Dodawanie elementów do modelu DOM */

console.log(userItem);

//document.querySelector('.users').appendChild(userItem); // jako ostatnie dziecko 


//document.querySelector('.users').insertBefore(userItem,document.querySelector('.users').firstElementChild); // jako pierwsze dziecko 

document.querySelector('.users').replaceChild(userItem,document.querySelector('.users').firstElementChild);

/*  Usuwanie elementów */
document.querySelector('.users').removeChild(document.querySelector('.users').lastElementChild);
//Usuwanie ostatniego dziecka

