class Person {
  constructor(name) {
    this.name = name;
    this.grupper = [];
  }

  addGruppe(gruppe) {
    if (!this.grupper.includes(gruppe)) {
      this.grupper.push(gruppe);
      gruppe.addPerson(this);
    }
  }

  removeGruppe(gruppe) {
    if (this.grupper.includes(gruppe)) {
      this.grupper = this.grupper.filter((val) => val !== gruppe);
      gruppe.removePerson(this);
    }
  }

  getGrupper() {
    return this.grupper;
  }

  toString() {
    return `Person { name: '${this.name}', grupper: ${this.grupper} }`;
  }
}

class Gruppe {
  constructor(name) {
    this.name = name;
    this.persons = [];
  }

  addPerson(person) {
    if (!this.persons.includes(person)) {
      this.persons.push(person);
      person.addGruppe(this);
    }
  }

  removePerson(person) {
    if (this.persons.includes(person)) {
      this.persons = this.persons.filter((val) => val !== person);
      person.removeGruppe(this);
    }
  }

  getPersons() {
    return this.persons;
  }

  toString() {
    return `Gruppe { name: '${this.name}', persons: ${this.persons} }`;
  }
}

const person1 = new Person("Lukas");
const person2 = new Person("Mads");
const person3 = new Person("Oliver");

const gruppe1 = new Gruppe("DIP");
const gruppe2 = new Gruppe("SUM");

const arr = [person1, person2, person3, gruppe1, gruppe2];

console.log(arr);

person1.addGruppe(gruppe1);
gruppe1.addPerson(person2);
person3.addGruppe(gruppe2);
gruppe2.addPerson(person1);

console.log(arr);
