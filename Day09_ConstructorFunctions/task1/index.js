class Person {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return this.navn;
  }

  equals(p) {
    return this.prototype.constructor == p.constructor && this.navn == p.navn;
  }

  static compare(p1, p2) {
    return p1.navn < p2.navn ? -1 : p1.navn > p2.navn ? 1 : 0;
  }
}
class Studerende extends Person {
  constructor(navn, id) {
    super(navn);
    this.id = id;
  }
  toString() {
    return super.toString() + ": " + this.id;
  }

  equals(s) {
    return super.equals(s) && this.id == s.id;
  }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let liste = [p1, p2, s1, s2];
console.log(liste);
liste.sort(Person.compare);
console.log(liste);

class Kat {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return "Kat: " + this.navn;
  }
}

liste.push(new Kat("Queso"));
liste.push(new Kat("Jamse"));
console.log(liste);
liste.sort(Person.compare);
console.log(liste);
