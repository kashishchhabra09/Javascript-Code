let obj1 = {
  name: "hello",
};
let obj2 = {
  ...obj1,
  id: 20,
};
let obj3 = {
  ...obj2,
  language: "JavaScript",
};
console.log(obj3);
