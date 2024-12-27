const Person = require("./person");



class PersonList {
  constructor() {
    this.people = [
      new Person('Alice'),
      new Person('Bob'),
      new Person('Charlie'),
      new Person('David'),
    ]
  }

  addPerson(name) {
     const newPerson = new Person(name);
      this.people.push(newPerson);
      return this.people;
  }

  removePerson(id) {
    this.people = this.people.filter(person => person.id !== id);
    return this.people;
  }

  getPeople() {
    return this.people;
  }

  increaseVotes(id) {
    this.people = this.people.map(person => {
      if (person.id === id) {
        person.votes+=1;
      }
      return person;
    });
  }

  changePersonName(id, newName) {
    this.people = this.people.map(person => {
      if (person.id === id) {
        person.name = newName;
      }
      return person;
    });
  }
}

module.exports = PersonList;