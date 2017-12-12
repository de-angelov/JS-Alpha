
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Human extends Animal {
    constructor(name, age, job='no job') {
        super(name, age);
        this.job = job;
        this.superPower= 'no superpower';
        // this.skill='no skill';
    }
        get CV() {
            return `${this.name} has a job as ${this.job}`;
        }
        set education(skill) {
          this.skill=skill;
        }
        get education() {
          return this.skill;
        }
    }
const Denis = new Human('Denis', 21 );
const Jhon = new Human('Jhon', 99 );


// const DenisStats = Denis.stats;

 Denis.job = 'programmer';
 console.log(Denis.CV);
 Denis.education='Drawing';
 console.log(Denis.education);

 const SuperDenis = Object.create(Denis);
 SuperDenis.name= 'SuperDenis';
 console.log(SuperDenis.CV);

 Object.setPrototypeOf(SuperDenis, Jhon);

 console.log(SuperDenis.name);
 console.log(Jhon.name);
 
