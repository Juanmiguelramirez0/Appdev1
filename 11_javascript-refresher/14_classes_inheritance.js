class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying");
  }
}

const jack = new Student("Miguel");
jack.sayHello();
jack.study();
