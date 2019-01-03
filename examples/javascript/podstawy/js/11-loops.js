/*  Pętla for  */



for(let i = 0; i<10; i++) {
    console.log(i);
}

let randoms = [];
for (let i = 0; i<10; i++) {
     randoms.push(Math.random());
     }
console.log(randoms);


/* Metoda foreach */
let names = ['Adam', 'Olga', "Tomek", "Anna"];
/*
for (let i = 0; i<names.length; i++) {
    console.log(names[i]);
}
*/

names.forEach(function(elem, index) {
    console.log(elem + 'ma index' + index);
});


/* Pętla for in */

let person = {name:"Łukasz",surname:"Badocha", age: 31}

for(let key in person) {
    console.log(key);
    console.log(person[key]);
}

/*  Pętla while */
let randomNumber = Math.round(Math.random()*10);
console.log(randomNumber);

/*while(randomNumber != 5) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random()*10);
}*/
/*while(randomNumber < 5) {
    console.log(randomNumber);
    randomNumber = Math.round(Math.random()*10);
}*/


do{
    console.log(randomNumber);
    randomNumber = Math.round(Math.random()*10);
} while(randomNumber < 5 )

/*  Instrukcja break */
    
    for(let i = 0; i<1000; i++) {
        
        if(i >100) break;
        
        console.log(i);
    }

/* Instrukcja continue */
    
    for(let i = 0; i<1000; i++) {
        
        if(i%3 != 0) {
            continue;
        };
        
        console.log(i);
    }
    
    
    var myNumbers = [1,2,3,4,5]
    var total = 0;
    for(i=0; i<myArray.length; i++){
        total += myArray[i];
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    