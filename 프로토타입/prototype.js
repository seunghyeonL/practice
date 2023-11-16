class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return this.name + " " + this.age;
  }
}

class Student extends Human {
  constructor(name, age, school) {
    super();
    this.name = name;
    this.age = age;
    this.school = school;
  }
  hello() {
    return this.name + " " + this.age + " " + this.school;
  }
}

const student = new Student("승현", 27, "university");
console.log(student.introduce());
console.log(student.hello());
console.log(Student.prototype);
console.log(Human.prototype);
console.log(Student.__proto__);
