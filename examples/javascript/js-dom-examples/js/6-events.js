/*  Zdarzenia jako właściwości obiektu DOM */


let button = document.getElementById('add-user-button');

//function changeBackground () {
//    document.querySelector('h1').classList.toggle("red");
function changeBackground () {
    console.log(this);
    this.classList.toggle("red");
}


//button.onclick = changeBackground;

/* Obsługa zdarzeń przez nasłuch */

button.addEventListener('click', changeBackground);

button.addEventListener('mouseover', function(){
    this.style.fontSize = '2em';
    
});

button.addEventListener('click', function(){
    this.style.fontSize = '16px';
});

document.getElementById('stop').addEventListener('clik',function(){
    
  button.removeEventListener('click', changeBackground); 
})



/* Przechwytywanie zdarzeń */

button.addEventListener('click', function(event){
        console.log(event);                
});

document.getElementById('first-link').addEventListener('click',function(event){
    event.preventDefault();
    event.stopPropagation();
    this.style.backgroundColor = 'darkorange';
})


/*  Propagacja zdarzeń */



document.getElementById('about').addEventListener('click',function(){
    this.style.backgroundColor = 'pink';
})





















