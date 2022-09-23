function Person(id, name, age, number) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.number = number;
}

const persons = [
  new Person(1, "Mike", 22, "42341902"),
  new Person(2, "Lukas", 31, "11223344"),
  new Person(3, "Oliver", 23, "12345678"),
];

console.log(persons.find((person) => person.number === "12345678"));
console.log(
  persons.reduce(
    (min, person) => (person.age < min ? person.age : min),
    Infinity
  )
);
console.log(
  persons
    .map((person) => person.name)
    .sort()
    .join(", ")
);
console.log(
  persons
    .filter((person) => person.age < 30)
    .map((person) => `name=${person.name}, number=${person.number}`)
    .join(" | ")
);
