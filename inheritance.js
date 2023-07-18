class Parent {
  name;
  print() {
    console.log("Parent Class");
  }
}

class Child extends Parent {
  id;
  print1() {
    console.log("Child Class");
  }
}
let obj = new Child();
obj.print();
obj.name = "hello world";
console.log("Name:" + obj.name);
obj.print1();
obj.id = 30;
console.log("ID:" + obj.id);
