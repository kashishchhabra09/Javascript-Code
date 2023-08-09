class parent {
  constructor() {
    console.log("Parent ");
  }
}
class child extends parent {
  constructor() {
    super();
    console.log("Child");
  }
}

let obj = new child();
