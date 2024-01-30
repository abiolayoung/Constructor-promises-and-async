//a constructor- is a special method for defining the prpoperty and methods of objects
// Constructors can be used to create multiple objects...

// function Car(make, model, year, color){
//    this.make = make,
//    this.model = model,
//    this.year = year,
//    this.color = color
//    this.drive = function(){console.log(`you drive the ${this.model}`)}
// }

// const car1 = new Car("benz", "g-wagon", "2024", "white");
// const car2 = new Car("chevy", "camaroa", 2025, "red");
// const car3 = new Car("Range rover", "velar", 2025, "black");

// console.log(car1.make)
// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)

// console.log(car2.make)
// console.log(car2.model)
// console.log(car2.year)
// console.log(car2.color)

// console.log(car3.make)
// console.log(car3.model)
// console.log(car3.year)
// console.log(car3.color)

// car1.drive();
// car2.drive();
// car3.drive();

function userData(pass, email, firstName, lastName, phone){
   this.pass = pass,
   this.email = email,
   this.firstName = firstName,
   this.lastName = lastName,
   this.phone = phone
}

const userData1 = new userData("ableGOD200", "abiolayoung229@gmail.com", "Abeeb", "Adeniyi", 9166971493)
const userData2 = new userData("princess200", "princesslambert606@gmail.com", "princess", "lambert", 9164895001)
const userData3 = new userData()
//|||||||||||||||||||||||||| |||||
console.log(userData1.pass)
console.log(userData1.email)
console.log(userData1.firstName)
console.log(userData1.lastName)
console.log(userData1.phone)
//|||||||||||||||||||||||||||||||
console.log(userData2.pass)
console.log(userData2.email)
console.log(userData2.firstName)
console.log(userData2.lastName)
console.log(userData2.phone)