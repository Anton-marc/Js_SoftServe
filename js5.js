//task1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};
let x
function propsCount(mentor){
    let x = Object.keys(mentor).length
    return x
}
propsCount(mentor);
//task2
let obj = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};
function showProps(obj){
    let x = Object.keys(obj)
    return x
}
showProps(obj);
//task2.2

let obj = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};
function showProps(obj){
    let x = Object.values(obj)
    return x
}
showProps(obj);
//task3
class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
      }
      showFullName() {
      console.log(this.name + this.surname);
    }

}
class Student extends Person{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
      }
      showFullName(midleName) {
        console.log(this.name + midleName + this.surname);
      }
      showCourse(currentYear){
        let res = currentYear - this.year;

        if ( res < 1 || res > 6){
            alert("You do not study in the university")
        }
        else{
            return res
        }

      }

}
  let per = new Person("Sam ", "Wotsons");
  per.showFullName();
  let student = new Student ("Tom ", " Woker ", 2015);
  student.showFullName("Vasowski");
  student.showCourse(2021);

task4

class Worker {
  #experience;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }
  get showExp() {
    return this.#experience;
  }
  set showExp(a) {
    this.#experience = a;
  }
  showSalary() {
    return this.dayRate * this.workingDays;
  }
  showSalaryWithExperience() {
    return this.dayRate * this.workingDays * this.#experience;
  }
}
// Using:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker1.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.showExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.showExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
let array = [worker1, worker2, worker3];
function sort(array) {}
task5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
    constructor (a, b, c){
        super();
        this.sideOne = a;
        this.sideTwo = b;
        this.sideThree = c;
    }
    getArea(){
        const p = (this.sideOne + this.sideTwo + this.sideThree ) / 2;
        const s = Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree));
        return s;
    }
}
class Square extends GeometricFigure {
    constructor (a){
        super();
        this.sideOne = a;
    }
    getArea(){
        const s =  this.sideOne * this.sideOne;
        return s;
    }
}
class Circle extends GeometricFigure {
    constructor (r){
        super();
        this.radius = r;
    }
    getArea(){
        const s =  (this.radius * this.radius) * Math.PI() ;
        return s;
    }

}


