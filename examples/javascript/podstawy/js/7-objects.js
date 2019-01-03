/* Obiekty w JavaScript */

let person = {
    name: 'Łukasz',
    height: 172,
    hobbies: ["Muzyka","Film"],
    children: [{name: 'Zuzanna',age: 4},{name: "Liliana", age: 3}],
    partner: {name: 'Jagoda',status: 'żona'},
    
    printInfo() {
        console.log(`Mam na imię ${this.name}. Interesuje mnie ${this.hobbies[0]} i ${this.hobbies[1]}. Mam ${this.children.length} dzieci.`);
        
    }
    }
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.children[1].name);
console.log(person.partner.name);

person.printInfo();

person.age = 31;

console.log(person);


/* Klasy zawsze nazywamy wielką literą */
class Car {
    constructor(brand,color){
        this.brand = brand;
        this.color = color;
    }
    
    printInfo() {
        console.log(`Samochód marki ${this.brand} ma kolor ${this.color}`);
    }
}

let ford = new Car("Ford", "red");
let audi = new Car("audi", "blue");

console.log(ford);
console.log(ford.color);
console.log(audi);

ford.printInfo();
audi.printInfo();