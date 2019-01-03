/*   Operatory arytmetyczne */

console.log(2+2);
console.log(2/0);

console.log(10%3);


let number = 10;

console.log(++number);
console.log(number++);
console.log(number);


/* Operatory przypisania */

let age = 30;
age += 5; // age = age + 5

console.log(age);


/*   Operatory porównania */

console.log(2==2); 
console.log(2==3); 

console.log(2=="2");
console.log(2==="2"); 

console.log(2!=2);
console.log(2!==3);

console.log(2>2);
console.log(1<2);

console.log(2>=2);

/* Operatory logiczne */

console.log(2==2 && 3>1);
console.log(2==2 && 3<1);
console.log(2==1 && 3<4);
console.log(2==4 && 3<1);

console.log(2==2 || 3<1);
console.log(2==3 || 3<4);
console.log(2==2 || 3<1);
console.log(2==3 || 3<1);

console.log(!(2==1));

/*  Operator warunkowy ?  */
let userAge = 30;
let isUserMature = (userAge>18)?"pełnoletni":"niepełnoletni"; // pełnoletni lub nie 

console.log(isUserMature);