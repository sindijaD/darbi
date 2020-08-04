const testOutput = document.querySelector(".testOutput");

function persona(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.ageCategory = () => {
    if (age > 30) {
      return "is older the 30";
    } else {
      return "younger then 30";
    }
  };
  this.length = this.length;
  this.gender = (gender) => {
    if (gender == undefined) {
      return "nobody knows";
    } else {
      return (this.gender = gender);
    } //must by better way to do it
  };
  this.mainTransportation = "motorcycle"; //unChangeable vērtība obviously

  this.fullName = () => {
    return this.name + " " + this.lastName;
  };
}
//lai dabūtu vērtību vajag izvadīt kā function 'austris.fullName()'
//nav iespējam pievienot  "function persona()" jaunas key value!!!!

let austris = new persona("Austris", "Daugulis", 29);

austris.language = "Latvian";
//console.log(austris);
//austris.gender("male");
//ja nav pievienota vērtība jaizvada kā funkcija lai izvadi
let cipars = new Number(12);
class car {
  constructor(mark, type, engine) {
    this.mark = mark;
    this.type = type;
    this.engine = engine;
  }
  carOwner(owner) {
    return owner + "is this " + this.mark + " owner";
  }
}
austrisCar = new car("Lamborghini", "sportsCar", "V12");
//console.log(austrisCar);

//testOutput.innerHTML = "sada " + austrisCar.carOwner("austris");
