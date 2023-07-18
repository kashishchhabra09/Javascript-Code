class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    console.log(this.name);
  }
  Print() {
    console.log(this.id);
  }
}
const emp = new Employee("hello", 20);
emp.Print();
